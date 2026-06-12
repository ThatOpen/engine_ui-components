import{b as s}from"./when-D9oPOCfO.js";import{C,W as v,S as L,a as I,b as $,G as k,I as E,F as f,H as B,m as M}from"./index-PQQfjRhF.js";import{a as P,Q as l}from"./index-DQFDb4ne.js";import{c as h}from"./index-D_X4r63z.js";P.init();const t=new C,S=t.get(v),a=S.create();a.name="main";const g=new L(t);g.setup();a.scene=g;const p=document.createElement("bim-viewport"),y=new I(t,p);a.renderer=y;const w=new $(t);a.camera=w;await a.camera.controls.setLookAt(65,19,-27,12.6,-5,-1.4);p.addEventListener("resize",()=>{y.resize(),w.updateAspect()});const x=t.get(k);x.create(a);t.init();const N=t.get(E);await N.setup({wasm:{absolute:!0,path:"https://unpkg.com/web-ifc@0.0.77/"}});const A=await f.getWorker(),r=t.get(f);r.init(A);a.camera.controls.addEventListener("update",()=>r.core.update());r.core.models.materials.list.onItemSet.add(({value:e})=>{"isLodMaterial"in e&&e.isLodMaterial||(e.polygonOffset=!0,e.polygonOffsetUnits=1,e.polygonOffsetFactor=Math.random())});const[o,F]=h.attributesChart({type:"pie",addLabels:!1,attribute:/empty/,category:/empty/,modelId:"",components:t}),[d,O]=h.attributesChart({type:"bar",addLabels:!1,attribute:/empty/,category:/empty/,modelId:"",components:t});o.borderColor="#00000000";d.borderColor="#00000000";const i=l.create(()=>s`
    <bim-chart-legend>
      <bim-label slot="no-chart" icon="ph:warning-fill" style="--bim-icon--c: gold;">No charts Attached</bim-label>
      <bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">No data to display</bim-label>
    </bim-chart-legend>`),H=t.get(B);i.addEventListener("label-click",async e=>{const{data:n,visibility:u}=e.detail;for(const m of n){const{modelIdMap:c}=m;await H.set(u,c)}});o.addEventListener("data-loaded",()=>{i.charts=[...i.charts,o]});d.addEventListener("data-loaded",()=>{i.charts=[...i.charts,d]});a.camera.controls.addEventListener("update",()=>r.core.update(!0));r.list.onItemSet.add(async({value:e})=>{e.useCamera(a.camera.three),a.scene.three.add(e.object),await r.core.update(!0),F({attribute:/^Name$/,category:/COLUMN/,modelId:e.modelId}),O({attribute:/^Name$/,category:/COLUMN/,modelId:e.modelId}),o.label="Pie Chart Data",d.label="Bar Chart Data"});const U="sample",R=["https://thatopen.github.io/engine_components/resources/frags/school_str.frag"];await Promise.all(R.map(async e=>{var c;if(!((c=e.split("/").pop())==null?void 0:c.split(".").shift()))return null;const m=await(await fetch(e)).arrayBuffer();return r.core.load(m,{modelId:U})}));const W=({target:e})=>{e.loading=!0,o.highlight(n=>"value"in n?n.value>100:!1),e.loading=!1},z=l.create(()=>s`
    <bim-button label="Highlight" @click=${W}></bim-button>
`),D=({target:e})=>{e.loading=!0,o.filterByValue(n=>"value"in n?n.value>100:!1),e.loading=!1},G=l.create(()=>s`
    <bim-button label="Filter" @click=${D}></bim-button>
`),Q=({target:e})=>{e.loading=!0,o.reset(),e.loading=!1},_=l.create(()=>s`
    <bim-button label="Reset" @click=${Q}></bim-button>
`),j=l.create(()=>s`
    <bim-panel style="display: flex; flex-direction: column; height: 100%;">
      <bim-panel-section label="Attributes Pie Chart" icon="raphael:piechart" style="flex: 1;">
        ${o}
      </bim-panel-section>
      <bim-panel-section label="Labels" icon="raphael:tag" style="flex: 0.1;">
      ${i}
      </bim-panel-section>
      <bim-panel-section label="Actions" style="display: flex; flex-direction: column; gap: 1.5rem;">
        ${z}
        ${G}
        ${_}
      </bim-panel-section> 
    </bim-panel>`),V=t.get(M);V.setup({world:a});const b=document.createElement("bim-grid");b.layouts={main:{template:`
    "chartPanel viewport 3fr"
    /25rem 1fr
    `,elements:{chartPanel:j,viewport:p}}};b.layout="main";document.body.append(b);
