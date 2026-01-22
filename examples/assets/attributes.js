import"./lit-html-CgQwCkHV.js";import{l as w,C,W as L,S as I,a as v,b as k,G as $,I as B,F as E,e as s,d as l,m as x,i as P}from"./index-suFrD91l.js";import{c as h}from"./index-CccEeiOe.js";w.init();const t=new C,R=t.get(L),a=R.create();a.name="main";const g=new I(t);g.setup();a.scene=g;const b=document.createElement("bim-viewport"),f=new v(t,b);a.renderer=f;const y=new k(t);a.camera=y;await a.camera.controls.setLookAt(65,19,-27,12.6,-5,-1.4);b.addEventListener("resize",()=>{f.resize(),y.updateAspect()});const F=t.get($);F.create(a);t.init();const S=t.get(B);await S.setup({wasm:{absolute:!0,path:"https://unpkg.com/web-ifc@0.0.74/"}});const j="https://thatopen.github.io/engine_fragment/resources/worker.mjs",A=await fetch(j),O=await A.blob(),U=new File([O],"worker.mjs",{type:"text/javascript"}),D=URL.createObjectURL(U),i=t.get(E);i.init(D);a.camera.controls.addEventListener("rest",()=>i.core.update(!0));const[r,N]=h.attributesChart({type:"pie",addLabels:!1,attribute:/empty/,category:/empty/,modelId:"",components:t}),[m,H]=h.attributesChart({type:"bar",addLabels:!1,attribute:/empty/,category:/empty/,modelId:"",components:t}),o=s.create(()=>l`
    <bim-chart-legend>
      <bim-label slot="no-chart" icon="ph:warning-fill" style="--bim-icon--c: gold;">No charts Attached</bim-label>
      <bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">No data to display</bim-label>
    </bim-chart-legend>`),z=t.get(x);o.addEventListener("label-click",async e=>{const{data:n,visibility:u}=e.detail;for(const d of n){const{modelIdMap:c}=d;await z.set(u,c)}});r.addEventListener("data-loaded",()=>{o.charts=[...o.charts,r]});m.addEventListener("data-loaded",()=>{o.charts=[...o.charts,m]});a.camera.controls.addEventListener("update",()=>i.core.update(!0));i.list.onItemSet.add(async({value:e})=>{e.useCamera(a.camera.three),a.scene.three.add(e.object),await i.core.update(!0),N({attribute:/^Name$/,category:/DOOR/,modelId:e.modelId}),H({attribute:/^Name$/,category:/DOOR/,modelId:e.modelId}),r.label="Pie Chart Data",m.label="Bar Chart Data"});const G="sample",M=["/resources/frags/school_arq.frag"];await Promise.all(M.map(async e=>{var c;if(!((c=e.split("/").pop())==null?void 0:c.split(".").shift()))return null;const d=await(await fetch(e)).arrayBuffer();return i.core.load(d,{modelId:G})}));const W=({target:e})=>{e.loading=!0,r.highlight(({value:n})=>n>100),e.loading=!1},_=s.create(()=>l`
    <bim-button label="Highlight" @click=${W}></bim-button>
`),q=({target:e})=>{e.loading=!0,r.filterByValue(({value:n})=>n>100),e.loading=!1},V=s.create(()=>l`
    <bim-button label="Filter" @click=${q}></bim-button>
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
        ${_}
        ${V}
        ${K}
      </bim-panel-section> 
    </bim-panel>`),T=t.get(P);T.setup({world:a});const p=document.createElement("bim-grid");p.layouts={main:{template:`
    "chartPanel viewport 3fr"
    /25rem 1fr
    `,elements:{chartPanel:Q,viewport:b}}};p.layout="main";document.body.append(p);
