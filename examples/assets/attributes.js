import"./lit-html-CgQwCkHV.js";import{l as w,C,W as I,S as L,a as v,b as $,G as k,I as E,F as B,e as s,d as l,m as P,i as x}from"./index-suFrD91l.js";import{c as h}from"./index-CccEeiOe.js";w.init();const t=new C,S=t.get(I),a=S.create();a.name="main";const g=new L(t);g.setup();a.scene=g;const p=document.createElement("bim-viewport"),f=new v(t,p);a.renderer=f;const y=new $(t);a.camera=y;await a.camera.controls.setLookAt(65,19,-27,12.6,-5,-1.4);p.addEventListener("resize",()=>{f.resize(),y.updateAspect()});const A=t.get(k);A.create(a);t.init();const R=t.get(E);await R.setup({wasm:{absolute:!0,path:"https://unpkg.com/web-ifc@0.0.74/"}});const i=t.get(B);i.init("/node_modules/@thatopen/fragments/dist/Worker/worker.mjs");a.camera.controls.addEventListener("rest",()=>i.core.update(!0));const[n,D]=h.attributesChart({type:"pie",addLabels:!1,attribute:/empty/,category:/empty/,modelId:"",components:t}),[m,F]=h.attributesChart({type:"bar",addLabels:!1,attribute:/empty/,category:/empty/,modelId:"",components:t}),o=s.create(()=>l`
    <bim-chart-legend>
      <bim-label slot="no-chart" icon="ph:warning-fill" style="--bim-icon--c: gold;">No charts Attached</bim-label>
      <bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">No data to display</bim-label>
    </bim-chart-legend>`),N=t.get(P);o.addEventListener("label-click",async e=>{const{data:r,visibility:u}=e.detail;for(const d of r){const{modelIdMap:c}=d;await N.set(u,c)}});n.addEventListener("data-loaded",()=>{o.charts=[...o.charts,n]});m.addEventListener("data-loaded",()=>{o.charts=[...o.charts,m]});a.camera.controls.addEventListener("update",()=>i.core.update(!0));i.list.onItemSet.add(async({value:e})=>{e.useCamera(a.camera.three),a.scene.three.add(e.object),await i.core.update(!0),D({attribute:/^Name$/,category:/DOOR/,modelId:e.modelId}),F({attribute:/^Name$/,category:/DOOR/,modelId:e.modelId}),n.label="Pie Chart Data",m.label="Bar Chart Data"});const O="sample",H=["/resources/frags/school_arq.frag"];await Promise.all(H.map(async e=>{var c;if(!((c=e.split("/").pop())==null?void 0:c.split(".").shift()))return null;const d=await(await fetch(e)).arrayBuffer();return i.core.load(d,{modelId:O})}));const W=({target:e})=>{e.loading=!0,n.highlight(({value:r})=>r>100),e.loading=!1},j=s.create(()=>l`
    <bim-button label="Highlight" @click=${W}></bim-button>
`),z=({target:e})=>{e.loading=!0,n.filterByValue(({value:r})=>r>100),e.loading=!1},G=s.create(()=>l`
    <bim-button label="Filter" @click=${z}></bim-button>
`),M=({target:e})=>{e.loading=!0,n.reset(),e.loading=!1},_=s.create(()=>l`
    <bim-button label="Reset" @click=${M}></bim-button>
`),q=s.create(()=>l`
    <bim-panel style="display: flex; flex-direction: column; height: 100%;">
      <bim-panel-section label="Attributes Pie Chart" icon="raphael:piechart" style="flex: 1;">
        ${n}
      </bim-panel-section>
      <bim-panel-section label="Labels" icon="raphael:tag" style="flex: 0.1;">
      ${o}
      </bim-panel-section>
      <bim-panel-section label="Actions" style="display: flex; flex-direction: column; gap: 1.5rem;">
        ${j}
        ${G}
        ${_}
      </bim-panel-section> 
    </bim-panel>`),V=t.get(x);V.setup({world:a});const b=document.createElement("bim-grid");b.layouts={main:{template:`
    "chartPanel viewport 3fr"
    /25rem 1fr
    `,elements:{chartPanel:q,viewport:p}}};b.layout="main";document.body.append(b);
