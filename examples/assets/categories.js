import"./lit-html-CgQwCkHV.js";import{l as v,C as I,W as L,S as k,a as $,b as B,G as x,I as F,F as E,e as l,d as s,f as M}from"./index-Dns8uyf5.js";import{b as S}from"./index-CxRwsq7h.js";import{c as h}from"./index-CZ8NzkTl.js";v.init();const t=new I,j=t.get(L),a=j.create();a.name="main";const g=new k(t);g.setup();a.scene=g;const d=document.createElement("bim-viewport"),f=new $(t,d);a.renderer=f;const w=new B(t);a.camera=w;await a.camera.controls.setLookAt(65,19,-27,12.6,-5,-1.4);d.addEventListener("resize",()=>{f.resize(),w.updateAspect()});const P=t.get(x);P.create(a);t.init();const R=t.get(F);await R.setup({wasm:{absolute:!0,path:"https://unpkg.com/web-ifc@0.0.74/"}});const U="https://thatopen.github.io/engine_fragment/resources/worker.mjs",A=await fetch(U),G=await A.blob(),W=new File([G],"worker.mjs",{type:"text/javascript"}),z=URL.createObjectURL(W),r=t.get(E);r.init(z);a.camera.controls.addEventListener("rest",()=>r.core.update(!0));const[o,D]=h.categoriesChart({type:"pie",addLabels:!0,modelIdMap:{},components:t}),[c,H]=h.categoriesChart({type:"bar",addLabels:!1,modelIdMap:{},components:t});async function N(){const e={};for(const[n,y]of r.list){const p=[],C=await y.getItemsWithGeometry();for(const b of C){if(!b)continue;const u=await b.getLocalId();u&&(p.push(u),e[n]=new Set(p))}}return e}const i=l.create(()=>s`
    <bim-chart-legend>
      <bim-label slot="no-chart" icon="ph:warning-fill" style="--bim-icon--c: gold;">No charts Attached</bim-label>
      <bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">No data to display</bim-label>
    </bim-chart-legend>`);o.addEventListener("data-loaded",()=>{i.charts=[...i.charts,o]});c.addEventListener("data-loaded",()=>{i.charts=[...i.charts,c]});a.camera.controls.addEventListener("update",()=>r.core.update(!0));r.list.onItemSet.add(async({value:e})=>{e.useCamera(a.camera.three),a.scene.three.add(e.object),await r.core.update(!0);const n=await N();D({modelIdMap:n}),H({modelIdMap:n}),o.label="Pie Chart Data",c.label="Bar Chart Data"});const O=({target:e})=>{e.loading=!0,o.highlight(n=>"value"in n?n.value>100:!1),e.loading=!1},V=l.create(()=>s`
    <bim-button label="Highlight" @click=${O}></bim-button>
`),_=({target:e})=>{e.loading=!0,o.filterByValue(n=>"value"in n?n.value>100:!1),e.loading=!1},q=l.create(()=>s`
    <bim-button label="Filter" @click=${_}></bim-button>
`),J=({target:e})=>{e.loading=!0,o.reset(),e.loading=!1},K=l.create(()=>s`
    <bim-button label="Reset" @click=${J}></bim-button>
`),Q=l.create(()=>{const[e]=S.loadFrag({components:t});return s`
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
        ${V}
        ${q}
        ${K}
      </bim-panel-section> 
    </bim-panel>`}),T=t.get(M);T.setup({world:a});const m=document.createElement("bim-grid");m.layouts={main:{template:`
    "chartPanel viewport 3fr"
    /25rem 1fr
    `,elements:{chartPanel:Q,viewport:d}}};m.layout="main";document.body.append(m);
