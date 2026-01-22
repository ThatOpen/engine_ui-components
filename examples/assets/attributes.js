import"./lit-html-CgQwCkHV.js";import{l as w,C,W as L,S as I,a as v,b as k,G as $,I as B,F as E,e as s,d as l,m as x,i as P}from"./index-suFrD91l.js";import{c as h}from"./index-CccEeiOe.js";w.init();const t=new C,R=t.get(L),a=R.create();a.name="main";const g=new I(t);g.setup();a.scene=g;const p=document.createElement("bim-viewport"),f=new v(t,p);a.renderer=f;const y=new k(t);a.camera=y;await a.camera.controls.setLookAt(65,19,-27,12.6,-5,-1.4);p.addEventListener("resize",()=>{f.resize(),y.updateAspect()});const F=t.get($);F.create(a);t.init();const S=t.get(B);await S.setup({wasm:{absolute:!0,path:"https://unpkg.com/web-ifc@0.0.74/"}});const j="https://thatopen.github.io/engine_fragment/resources/worker.mjs",A=await fetch(j),O=await A.blob(),U=new File([O],"worker.mjs",{type:"text/javascript"}),D=URL.createObjectURL(U),o=t.get(E);o.init(D);a.camera.controls.addEventListener("rest",()=>o.core.update(!0));const[n,N]=h.attributesChart({type:"pie",addLabels:!1,attribute:/empty/,category:/empty/,modelId:"",components:t}),[m,H]=h.attributesChart({type:"bar",addLabels:!1,attribute:/empty/,category:/empty/,modelId:"",components:t}),i=s.create(()=>l`
    <bim-chart-legend>
      <bim-label slot="no-chart" icon="ph:warning-fill" style="--bim-icon--c: gold;">No charts Attached</bim-label>
      <bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">No data to display</bim-label>
    </bim-chart-legend>`),_=t.get(x);i.addEventListener("label-click",async e=>{const{data:r,visibility:u}=e.detail;for(const d of r){const{modelIdMap:c}=d;await _.set(u,c)}});n.addEventListener("data-loaded",()=>{i.charts=[...i.charts,n]});m.addEventListener("data-loaded",()=>{i.charts=[...i.charts,m]});a.camera.controls.addEventListener("update",()=>o.core.update(!0));o.list.onItemSet.add(async({value:e})=>{e.useCamera(a.camera.three),a.scene.three.add(e.object),await o.core.update(!0),N({attribute:/^Name$/,category:/DOOR/,modelId:e.modelId}),H({attribute:/^Name$/,category:/DOOR/,modelId:e.modelId}),n.label="Pie Chart Data",m.label="Bar Chart Data"});const z="sample",G=["https://thatopen.github.io/engine_components/resources/frags/school_arq.frag"];await Promise.all(G.map(async e=>{var c;if(!((c=e.split("/").pop())==null?void 0:c.split(".").shift()))return null;const d=await(await fetch(e)).arrayBuffer();return o.core.load(d,{modelId:z})}));const M=({target:e})=>{e.loading=!0,n.highlight(({value:r})=>r>100),e.loading=!1},W=s.create(()=>l`
    <bim-button label="Highlight" @click=${M}></bim-button>
`),q=({target:e})=>{e.loading=!0,n.filterByValue(({value:r})=>r>100),e.loading=!1},V=s.create(()=>l`
    <bim-button label="Filter" @click=${q}></bim-button>
`),J=({target:e})=>{e.loading=!0,n.reset(),e.loading=!1},K=s.create(()=>l`
    <bim-button label="Reset" @click=${J}></bim-button>
`),Q=s.create(()=>l`
    <bim-panel style="display: flex; flex-direction: column; height: 100%;">
      <bim-panel-section label="Attributes Pie Chart" icon="raphael:piechart" style="flex: 1;">
        ${n}
      </bim-panel-section>
      <bim-panel-section label="Labels" icon="raphael:tag" style="flex: 0.1;">
      ${i}
      </bim-panel-section>
      <bim-panel-section label="Actions" style="display: flex; flex-direction: column; gap: 1.5rem;">
        ${W}
        ${V}
        ${K}
      </bim-panel-section> 
    </bim-panel>`),T=t.get(P);T.setup({world:a});const b=document.createElement("bim-grid");b.layouts={main:{template:`
    "chartPanel viewport 3fr"
    /25rem 1fr
    `,elements:{chartPanel:Q,viewport:p}}};b.layout="main";document.body.append(b);
