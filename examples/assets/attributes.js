import"./lit-html-CgQwCkHV.js";import{p as w,C as L,W as v,S as C,a as I,b as k,G as $,I as B,F as E,m as s,e as l,H as S,n as U}from"./index-DNriEO-H.js";import{c as h}from"./index-B1cIZr2J.js";w.init();const t=new L,x=t.get(v),a=x.create();a.name="main";const f=new C(t);f.setup();a.scene=f;const p=document.createElement("bim-viewport"),g=new I(t,p);a.renderer=g;const y=new k(t);a.camera=y;await a.camera.controls.setLookAt(65,19,-27,12.6,-5,-1.4);p.addEventListener("resize",()=>{g.resize(),y.updateAspect()});const F=t.get($);F.create(a);t.init();const M=t.get(B);await M.setup({wasm:{absolute:!0,path:"https://unpkg.com/web-ifc@0.0.77/"}});const P="https://thatopen.github.io/engine_fragment/resources/worker.mjs",N=await fetch(P),O=await N.blob(),j=new File([O],"worker.mjs",{type:"text/javascript"}),A=URL.createObjectURL(j),o=t.get(E);o.init(A);a.camera.controls.addEventListener("update",()=>o.core.update());o.core.models.materials.list.onItemSet.add(({value:e})=>{"isLodMaterial"in e&&e.isLodMaterial||(e.polygonOffset=!0,e.polygonOffsetUnits=1,e.polygonOffsetFactor=Math.random())});const[r,R]=h.attributesChart({type:"pie",addLabels:!1,attribute:/empty/,category:/empty/,modelId:"",components:t}),[m,H]=h.attributesChart({type:"bar",addLabels:!1,attribute:/empty/,category:/empty/,modelId:"",components:t}),i=s.create(()=>l`
    <bim-chart-legend>
      <bim-label slot="no-chart" icon="ph:warning-fill" style="--bim-icon--c: gold;">No charts Attached</bim-label>
      <bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">No data to display</bim-label>
    </bim-chart-legend>`),_=t.get(S);i.addEventListener("label-click",async e=>{const{data:n,visibility:u}=e.detail;for(const d of n){const{modelIdMap:c}=d;await _.set(u,c)}});r.addEventListener("data-loaded",()=>{i.charts=[...i.charts,r]});m.addEventListener("data-loaded",()=>{i.charts=[...i.charts,m]});a.camera.controls.addEventListener("update",()=>o.core.update(!0));o.list.onItemSet.add(async({value:e})=>{e.useCamera(a.camera.three),a.scene.three.add(e.object),await o.core.update(!0),R({attribute:/^Name$/,category:/COLUMN/,modelId:e.modelId}),H({attribute:/^Name$/,category:/COLUMN/,modelId:e.modelId}),r.label="Pie Chart Data",m.label="Bar Chart Data"});const z="sample",D=["https://thatopen.github.io/engine_components/resources/frags/school_str.frag"];await Promise.all(D.map(async e=>{var c;if(!((c=e.split("/").pop())==null?void 0:c.split(".").shift()))return null;const d=await(await fetch(e)).arrayBuffer();return o.core.load(d,{modelId:z})}));const G=({target:e})=>{e.loading=!0,r.highlight(n=>"value"in n?n.value>100:!1),e.loading=!1},W=s.create(()=>l`
    <bim-button label="Highlight" @click=${G}></bim-button>
`),T=({target:e})=>{e.loading=!0,r.filterByValue(n=>"value"in n?n.value>100:!1),e.loading=!1},V=s.create(()=>l`
    <bim-button label="Filter" @click=${T}></bim-button>
`),q=({target:e})=>{e.loading=!0,r.reset(),e.loading=!1},J=s.create(()=>l`
    <bim-button label="Reset" @click=${q}></bim-button>
`),K=s.create(()=>l`
    <bim-panel style="display: flex; flex-direction: column; height: 100%;">
      <bim-panel-section label="Attributes Pie Chart" icon="raphael:piechart" style="flex: 1;">
        ${r}
      </bim-panel-section>
      <bim-panel-section label="Labels" icon="raphael:tag" style="flex: 0.1;">
      ${i}
      </bim-panel-section>
      <bim-panel-section label="Actions" style="display: flex; flex-direction: column; gap: 1.5rem;">
        ${W}
        ${V}
        ${J}
      </bim-panel-section> 
    </bim-panel>`),Q=t.get(U);Q.setup({world:a});const b=document.createElement("bim-grid");b.layouts={main:{template:`
    "chartPanel viewport 3fr"
    /25rem 1fr
    `,elements:{chartPanel:K,viewport:p}}};b.layout="main";document.body.append(b);
