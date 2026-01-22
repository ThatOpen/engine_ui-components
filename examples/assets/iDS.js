import"./lit-html-CgQwCkHV.js";import{l as F,C as P,W as R,S as $,a as k,b as x,G as D,I as B,F as z,g as A,h as N,j as O,z as g,k as f,e as i,d as o,i as W}from"./index-suFrD91l.js";import{c as y}from"./index-CccEeiOe.js";F.init();const t=new P,_=t.get(R),a=_.create();a.name="main";const w=new $(t);w.setup();a.scene=w;const p=document.createElement("bim-viewport"),C=new k(t,p);a.renderer=C;const I=new x(t);a.camera=I;await a.camera.controls.setLookAt(65,19,-27,12.6,-5,-1.4);p.addEventListener("resize",()=>{C.resize(),I.updateAspect()});const j=t.get(D);j.create(a);t.init();const S=t.get(B);S.settings.autoSetWasm=!1;await S.setup({wasm:{absolute:!1,path:"https://unpkg.com/web-ifc@0.0.74/"}});const s=t.get(z);s.init("/node_modules/@thatopen/fragments/dist/Worker/worker.mjs");a.camera.controls.addEventListener("rest",()=>s.core.update(!0));a.camera.controls.addEventListener("update",()=>s.core.update(!0));const E=t.get(A),c=E.create("Sample",["IFC4"]);c.description="All doors must have FireRating specified in Pset_DoorCommon";const H=new N(t,{type:"simple",parameter:"IFCDOOR"}),M=new O(t,{type:"simple",parameter:"Pset_DoorCommon"},{type:"simple",parameter:"FireRating"});c.applicability.add(H);c.requirements.add(M);const L="sample";s.list.onItemSet.add(({value:e})=>{e.useCamera(a.camera.three),a.scene.three.add(e.object),s.core.update(!0)});const q=["/resources/frags/school_arq.frag"];await Promise.all(q.map(async e=>{var b;if(!((b=e.split("/").pop())==null?void 0:b.split(".").shift()))return null;const v=await(await fetch(e)).arrayBuffer();return s.core.load(v,{modelId:L})}));const u=await c.test([new RegExp(L)]),{fail:G,pass:V}=E.getModelIdMap(u),d=[s.resetHighlight()];d.push(s.highlight({customId:"green",color:new f("green"),renderedFaces:g.ONE,opacity:1,transparent:!1},V));d.push(s.highlight({customId:"red",color:new f("red"),renderedFaces:g.ONE,opacity:1,transparent:!1},G));d.push(s.core.update(!0));await Promise.all(d);const[r]=y.idsChart({type:"pie",addLabels:!0,idsResult:u,components:t}),[m]=y.idsChart({type:"bar",addLabels:!1,idsResult:u,components:t}),n=i.create(()=>o`
    <bim-chart-legend>
      <bim-label slot="missing-data">No data to display</bim-label>
      <bim-label slot="no-chart">No chart attached</bim-label>
    </bim-chart-legend>
`);r.addEventListener("data-loaded",()=>{n.charts=[...n.charts,r]});m.addEventListener("data-loaded",()=>{n.charts=[...n.charts,m]});const J=({target:e})=>{e.loading=!0,r.highlight(({value:l})=>l>100),e.loading=!1},K=i.create(()=>o`
    <bim-button label="Highlight" @click=${J}></bim-button>
`),Q=({target:e})=>{e.loading=!0,r.filterByValue(({value:l})=>l>100),e.loading=!1},T=i.create(()=>o`
    <bim-button label="Filter" @click=${Q}></bim-button>
`),U=({target:e})=>{e.loading=!0,r.reset(),e.loading=!1},X=i.create(()=>o`
    <bim-button label="Reset" @click=${U}></bim-button>
`),Y=i.create(()=>o`
    <bim-panel style="display: flex; flex-direction: column; height: 100%;">
      <bim-panel-section label="IDS Result Pie Chart" icon="raphael:piechart" style="flex: 1;">
        ${r}
      </bim-panel-section>
      <bim-panel-section label="IDS Result Bar Chart" icon="raphael:barchart" style="flex: 1;">
        ${m}
      </bim-panel-section>
      <bim-panel-section label="Labels" icon="raphael:tag" style="flex: 0.1;">
      ${n}
      </bim-panel-section>
      <bim-panel-section label="Actions" style="display: flex; flex-direction: column; gap: 1.5rem;">
        ${K}
        ${T}
        ${X}
      </bim-panel-section> 
    </bim-panel>`),Z=t.get(W);Z.setup({world:a});const h=document.createElement("bim-grid");h.layouts={main:{template:`
    "chartPanel viewport 3fr"
    /25rem 1fr
    `,elements:{chartPanel:Y,viewport:p}}};h.layout="main";document.body.append(h);
