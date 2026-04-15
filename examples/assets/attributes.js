import{b as s}from"./if-defined-DypSrBBK.js";import{r as w,C,W as L,S as v,a as I,b as k,G as $,I as B,F as E,h as l,H as U,D as x}from"./index-6HcFeNjn.js";import{c as h}from"./index-DicGxPVg.js";w.init();const t=new C,F=t.get(L),a=F.create();a.name="main";const f=new v(t);f.setup();a.scene=f;const p=document.createElement("bim-viewport"),g=new I(t,p);a.renderer=g;const y=new k(t);a.camera=y;await a.camera.controls.setLookAt(65,19,-27,12.6,-5,-1.4);p.addEventListener("resize",()=>{g.resize(),y.updateAspect()});const M=t.get($);M.create(a);t.init();const P=t.get(B);await P.setup({wasm:{absolute:!0,path:"https://unpkg.com/web-ifc@0.0.77/"}});const S="https://thatopen.github.io/engine_fragment/resources/worker.mjs",N=await fetch(S),O=await N.blob(),j=new File([O],"worker.mjs",{type:"text/javascript"}),A=URL.createObjectURL(j),n=t.get(E);n.init(A);a.camera.controls.addEventListener("update",()=>n.core.update());n.core.models.materials.list.onItemSet.add(({value:e})=>{"isLodMaterial"in e&&e.isLodMaterial||(e.polygonOffset=!0,e.polygonOffsetUnits=1,e.polygonOffsetFactor=Math.random())});const[r,R]=h.attributesChart({type:"pie",addLabels:!1,attribute:/empty/,category:/empty/,modelId:"",components:t}),[d,D]=h.attributesChart({type:"bar",addLabels:!1,attribute:/empty/,category:/empty/,modelId:"",components:t});r.borderColor="#00000000";d.borderColor="#00000000";const i=l.create(()=>s`
    <bim-chart-legend>
      <bim-label slot="no-chart" icon="ph:warning-fill" style="--bim-icon--c: gold;">No charts Attached</bim-label>
      <bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">No data to display</bim-label>
    </bim-chart-legend>`),H=t.get(U);i.addEventListener("label-click",async e=>{const{data:o,visibility:u}=e.detail;for(const m of o){const{modelIdMap:c}=m;await H.set(u,c)}});r.addEventListener("data-loaded",()=>{i.charts=[...i.charts,r]});d.addEventListener("data-loaded",()=>{i.charts=[...i.charts,d]});a.camera.controls.addEventListener("update",()=>n.core.update(!0));n.list.onItemSet.add(async({value:e})=>{e.useCamera(a.camera.three),a.scene.three.add(e.object),await n.core.update(!0),R({attribute:/^Name$/,category:/COLUMN/,modelId:e.modelId}),D({attribute:/^Name$/,category:/COLUMN/,modelId:e.modelId}),r.label="Pie Chart Data",d.label="Bar Chart Data"});const _="sample",z=["https://thatopen.github.io/engine_components/resources/frags/school_str.frag"];await Promise.all(z.map(async e=>{var c;if(!((c=e.split("/").pop())==null?void 0:c.split(".").shift()))return null;const m=await(await fetch(e)).arrayBuffer();return n.core.load(m,{modelId:_})}));const G=({target:e})=>{e.loading=!0,r.highlight(o=>"value"in o?o.value>100:!1),e.loading=!1},W=l.create(()=>s`
    <bim-button label="Highlight" @click=${G}></bim-button>
`),V=({target:e})=>{e.loading=!0,r.filterByValue(o=>"value"in o?o.value>100:!1),e.loading=!1},q=l.create(()=>s`
    <bim-button label="Filter" @click=${V}></bim-button>
`),J=({target:e})=>{e.loading=!0,r.reset(),e.loading=!1},K=l.create(()=>s`
    <bim-button label="Reset" @click=${J}></bim-button>
`),Q=l.create(()=>s`
    <bim-panel style="display: flex; flex-direction: column; height: 100%;">
      <bim-panel-section label="Attributes Pie Chart" icon="raphael:piechart" style="flex: 1;">
        ${r}
      </bim-panel-section>
      <bim-panel-section label="Labels" icon="raphael:tag" style="flex: 0.1;">
      ${i}
      </bim-panel-section>
      <bim-panel-section label="Actions" style="display: flex; flex-direction: column; gap: 1.5rem;">
        ${W}
        ${q}
        ${K}
      </bim-panel-section> 
    </bim-panel>`),T=t.get(x);T.setup({world:a});const b=document.createElement("bim-grid");b.layouts={main:{template:`
    "chartPanel viewport 3fr"
    /25rem 1fr
    `,elements:{chartPanel:Q,viewport:p}}};b.layout="main";document.body.append(b);
