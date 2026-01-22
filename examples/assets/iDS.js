import"./lit-html-CgQwCkHV.js";import{l as k,C as v,W as E,S as P,a as x,b as $,G as D,I as B,F as j,g as O,h as U,j as z,z as g,k as f,e as o,d as i,i as A}from"./index-suFrD91l.js";import{c as w}from"./index-CccEeiOe.js";k.init();const t=new v,N=t.get(E),a=N.create();a.name="main";const y=new P(t);y.setup();a.scene=y;const d=document.createElement("bim-viewport"),C=new x(t,d);a.renderer=C;const I=new $(t);a.camera=I;await a.camera.controls.setLookAt(65,19,-27,12.6,-5,-1.4);d.addEventListener("resize",()=>{C.resize(),I.updateAspect()});const _=t.get(D);_.create(a);t.init();const S=t.get(B);S.settings.autoSetWasm=!1;await S.setup({wasm:{absolute:!1,path:"https://unpkg.com/web-ifc@0.0.74/"}});const H="https://thatopen.github.io/engine_fragment/resources/worker.mjs",M=await fetch(H),W=await M.blob(),q=new File([W],"worker.mjs",{type:"text/javascript"}),G=URL.createObjectURL(q),r=t.get(j);r.init(G);a.camera.controls.addEventListener("rest",()=>r.core.update(!0));a.camera.controls.addEventListener("update",()=>r.core.update(!0));const L=t.get(O),c=L.create("Sample",["IFC4"]);c.description="All doors must have FireRating specified in Pset_DoorCommon";const V=new U(t,{type:"simple",parameter:"IFCDOOR"}),J=new z(t,{type:"simple",parameter:"Pset_DoorCommon"},{type:"simple",parameter:"FireRating"});c.applicability.add(V);c.requirements.add(J);const F="sample";r.list.onItemSet.add(({value:e})=>{e.useCamera(a.camera.three),a.scene.three.add(e.object),r.core.update(!0)});const K=["/resources/frags/school_arq.frag"];await Promise.all(K.map(async e=>{var b;if(!((b=e.split("/").pop())==null?void 0:b.split(".").shift()))return null;const R=await(await fetch(e)).arrayBuffer();return r.core.load(R,{modelId:F})}));const h=await c.test([new RegExp(F)]),{fail:Q,pass:T}=L.getModelIdMap(h),m=[r.resetHighlight()];m.push(r.highlight({customId:"green",color:new f("green"),renderedFaces:g.ONE,opacity:1,transparent:!1},T));m.push(r.highlight({customId:"red",color:new f("red"),renderedFaces:g.ONE,opacity:1,transparent:!1},Q));m.push(r.core.update(!0));await Promise.all(m);const[s]=w.idsChart({type:"pie",addLabels:!0,idsResult:h,components:t}),[p]=w.idsChart({type:"bar",addLabels:!1,idsResult:h,components:t}),n=o.create(()=>i`
    <bim-chart-legend>
      <bim-label slot="missing-data">No data to display</bim-label>
      <bim-label slot="no-chart">No chart attached</bim-label>
    </bim-chart-legend>
`);s.addEventListener("data-loaded",()=>{n.charts=[...n.charts,s]});p.addEventListener("data-loaded",()=>{n.charts=[...n.charts,p]});const X=({target:e})=>{e.loading=!0,s.highlight(({value:l})=>l>100),e.loading=!1},Y=o.create(()=>i`
    <bim-button label="Highlight" @click=${X}></bim-button>
`),Z=({target:e})=>{e.loading=!0,s.filterByValue(({value:l})=>l>100),e.loading=!1},ee=o.create(()=>i`
    <bim-button label="Filter" @click=${Z}></bim-button>
`),te=({target:e})=>{e.loading=!0,s.reset(),e.loading=!1},ae=o.create(()=>i`
    <bim-button label="Reset" @click=${te}></bim-button>
`),re=o.create(()=>i`
    <bim-panel style="display: flex; flex-direction: column; height: 100%;">
      <bim-panel-section label="IDS Result Pie Chart" icon="raphael:piechart" style="flex: 1;">
        ${s}
      </bim-panel-section>
      <bim-panel-section label="IDS Result Bar Chart" icon="raphael:barchart" style="flex: 1;">
        ${p}
      </bim-panel-section>
      <bim-panel-section label="Labels" icon="raphael:tag" style="flex: 0.1;">
      ${n}
      </bim-panel-section>
      <bim-panel-section label="Actions" style="display: flex; flex-direction: column; gap: 1.5rem;">
        ${Y}
        ${ee}
        ${ae}
      </bim-panel-section> 
    </bim-panel>`),se=t.get(A);se.setup({world:a});const u=document.createElement("bim-grid");u.layouts={main:{template:`
    "chartPanel viewport 3fr"
    /25rem 1fr
    `,elements:{chartPanel:re,viewport:d}}};u.layout="main";document.body.append(u);
