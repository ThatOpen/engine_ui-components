import{b as i}from"./when-D9oPOCfO.js";import{C as E,W as P,S as $,a as k,b as x,G as D,I as O,F as g,h as B,i as M,j as A,R as f,k as y,m as N}from"./index-PQQfjRhF.js";import{a as W,Q as l}from"./index-DQFDb4ne.js";import{c as w}from"./index-D_X4r63z.js";W.init();const t=new E,_=t.get(P),a=_.create();a.name="main";const C=new $(t);C.setup();a.scene=C;const p=document.createElement("bim-viewport"),I=new k(t,p);a.renderer=I;const S=new x(t);a.camera=S;await a.camera.controls.setLookAt(65,19,-27,12.6,-5,-1.4);p.addEventListener("resize",()=>{I.resize(),S.updateAspect()});const H=t.get(D);H.create(a);t.init();const v=t.get(O);v.settings.autoSetWasm=!1;await v.setup({wasm:{absolute:!1,path:"https://unpkg.com/web-ifc@0.0.77/"}});const j=await g.getWorker(),s=t.get(g);s.init(j);a.camera.controls.addEventListener("update",()=>s.core.update());s.core.models.materials.list.onItemSet.add(({value:e})=>{"isLodMaterial"in e&&e.isLodMaterial||(e.polygonOffset=!0,e.polygonOffsetUnits=1,e.polygonOffsetFactor=Math.random())});const F=t.get(B),d=F.create("Sample",["IFC4"]);d.description="All doors must have FireRating specified in Pset_DoorCommon";const q=new M(t,{type:"simple",parameter:"IFCDOOR"}),z=new A(t,{type:"simple",parameter:"Pset_DoorCommon"},{type:"simple",parameter:"FireRating"});d.applicability.add(q);d.requirements.add(z);const L="sample";s.list.onItemSet.add(({value:e})=>{e.useCamera(a.camera.three),a.scene.three.add(e.object),s.core.update(!0)});const G=["https://thatopen.github.io/engine_components/resources/frags/school_arq.frag"];await Promise.all(G.map(async e=>{var b;if(!((b=e.split("/").pop())==null?void 0:b.split(".").shift()))return null;const R=await(await fetch(e)).arrayBuffer();return s.core.load(R,{modelId:L})}));const u=await d.test([new RegExp(L)]),{fail:Q,pass:U}=F.getModelIdMap(u),m=[s.resetHighlight()];m.push(s.highlight({customId:"green",color:new y("green"),renderedFaces:f.ONE,opacity:1,transparent:!1},U));m.push(s.highlight({customId:"red",color:new y("red"),renderedFaces:f.ONE,opacity:1,transparent:!1},Q));m.push(s.core.update(!0));await Promise.all(m);const[n]=w.idsChart({type:"pie",addLabels:!0,idsResult:u,components:t}),[c]=w.idsChart({type:"bar",addLabels:!1,idsResult:u,components:t});n.borderColor="#00000000";c.borderColor="#00000000";const o=l.create(()=>i`
    <bim-chart-legend>
      <bim-label slot="missing-data">No data to display</bim-label>
      <bim-label slot="no-chart">No chart attached</bim-label>
    </bim-chart-legend>
`);n.addEventListener("data-loaded",()=>{o.charts=[...o.charts,n]});c.addEventListener("data-loaded",()=>{o.charts=[...o.charts,c]});const V=({target:e})=>{e.loading=!0,n.highlight(r=>"value"in r?r.value>100:!1),e.loading=!1},J=l.create(()=>i`
    <bim-button label="Highlight" @click=${V}></bim-button>
`),K=({target:e})=>{e.loading=!0,n.filterByValue(r=>"value"in r?r.value>100:!1),e.loading=!1},T=l.create(()=>i`
    <bim-button label="Filter" @click=${K}></bim-button>
`),X=({target:e})=>{e.loading=!0,n.reset(),e.loading=!1},Y=l.create(()=>i`
    <bim-button label="Reset" @click=${X}></bim-button>
`),Z=l.create(()=>i`
    <bim-panel style="display: flex; flex-direction: column; height: 100%;">
      <bim-panel-section label="IDS Result Pie Chart" icon="raphael:piechart" style="flex: 1;">
        ${n}
      </bim-panel-section>
      <bim-panel-section label="IDS Result Bar Chart" icon="raphael:barchart" style="flex: 1;">
        ${c}
      </bim-panel-section>
      <bim-panel-section label="Labels" icon="raphael:tag" style="flex: 0.1;">
      ${o}
      </bim-panel-section>
      <bim-panel-section label="Actions" style="display: flex; flex-direction: column; gap: 1.5rem;">
        ${J}
        ${T}
        ${Y}
      </bim-panel-section> 
    </bim-panel>`),ee=t.get(N);ee.setup({world:a});const h=document.createElement("bim-grid");h.layouts={main:{template:`
    "chartPanel viewport 3fr"
    /25rem 1fr
    `,elements:{chartPanel:Z,viewport:p}}};h.layout="main";document.body.append(h);
