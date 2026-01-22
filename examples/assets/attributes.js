import"./lit-html-CgQwCkHV.js";import{l as y,C,W as v,S as L,a as I,b as k,G as $,I as B,F as E,e as s,d as l,o as x,f as P}from"./index-Dns8uyf5.js";import{c as h}from"./index-CZ8NzkTl.js";y.init();const t=new C,U=t.get(v),a=U.create();a.name="main";const g=new L(t);g.setup();a.scene=g;const p=document.createElement("bim-viewport"),f=new I(t,p);a.renderer=f;const w=new k(t);a.camera=w;await a.camera.controls.setLookAt(65,19,-27,12.6,-5,-1.4);p.addEventListener("resize",()=>{f.resize(),w.updateAspect()});const F=t.get($);F.create(a);t.init();const N=t.get(B);await N.setup({wasm:{absolute:!0,path:"https://unpkg.com/web-ifc@0.0.74/"}});const S="https://thatopen.github.io/engine_fragment/resources/worker.mjs",j=await fetch(S),A=await j.blob(),R=new File([A],"worker.mjs",{type:"text/javascript"}),M=URL.createObjectURL(R),i=t.get(E);i.init(M);a.camera.controls.addEventListener("rest",()=>i.core.update(!0));const[r,H]=h.attributesChart({type:"pie",addLabels:!1,attribute:/empty/,category:/empty/,modelId:"",components:t}),[m,O]=h.attributesChart({type:"bar",addLabels:!1,attribute:/empty/,category:/empty/,modelId:"",components:t}),o=s.create(()=>l`
    <bim-chart-legend>
      <bim-label slot="no-chart" icon="ph:warning-fill" style="--bim-icon--c: gold;">No charts Attached</bim-label>
      <bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">No data to display</bim-label>
    </bim-chart-legend>`),_=t.get(x);o.addEventListener("label-click",async e=>{const{data:n,visibility:u}=e.detail;for(const d of n){const{modelIdMap:c}=d;await _.set(u,c)}});r.addEventListener("data-loaded",()=>{o.charts=[...o.charts,r]});m.addEventListener("data-loaded",()=>{o.charts=[...o.charts,m]});a.camera.controls.addEventListener("update",()=>i.core.update(!0));i.list.onItemSet.add(async({value:e})=>{e.useCamera(a.camera.three),a.scene.three.add(e.object),await i.core.update(!0),H({attribute:/^Name$/,category:/COLUMN/,modelId:e.modelId}),O({attribute:/^Name$/,category:/COLUMN/,modelId:e.modelId}),r.label="Pie Chart Data",m.label="Bar Chart Data"});const z="sample",D=["https://thatopen.github.io/engine_components/resources/frags/school_str.frag"];await Promise.all(D.map(async e=>{var c;if(!((c=e.split("/").pop())==null?void 0:c.split(".").shift()))return null;const d=await(await fetch(e)).arrayBuffer();return i.core.load(d,{modelId:z})}));const G=({target:e})=>{e.loading=!0,r.highlight(n=>"value"in n?n.value>100:!1),e.loading=!1},W=s.create(()=>l`
    <bim-button label="Highlight" @click=${G}></bim-button>
`),V=({target:e})=>{e.loading=!0,r.filterByValue(n=>"value"in n?n.value>100:!1),e.loading=!1},q=s.create(()=>l`
    <bim-button label="Filter" @click=${V}></bim-button>
`),J=({target:e})=>{e.loading=!0,r.reset(),e.loading=!1},K=s.create(()=>l`
    <bim-button label="Reset" @click=${J}></bim-button>
`),Q=s.create(()=>l`
    <bim-panel style="display: flex; flex-direction: column; height: 100%;">
      <bim-panel-section label="Attributes Pie Chart" icon="raphael:piechart" style="flex: 1;">
        ${r}
      </bim-panel-section>
      <bim-panel-section label="Labels" icon="raphael:tag" style="flex: 0.1;">
      ${o}
      </bim-panel-section>
      <bim-panel-section label="Actions" style="display: flex; flex-direction: column; gap: 1.5rem;">
        ${W}
        ${q}
        ${K}
      </bim-panel-section> 
    </bim-panel>`),T=t.get(P);T.setup({world:a});const b=document.createElement("bim-grid");b.layouts={main:{template:`
    "chartPanel viewport 3fr"
    /25rem 1fr
    `,elements:{chartPanel:Q,viewport:p}}};b.layout="main";document.body.append(b);
