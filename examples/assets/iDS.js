import"./lit-html-CgQwCkHV.js";import{l as R,C as k,W as E,S as P,a as x,b as $,G as D,I as B,F as j,h as O,j as U,k as _,z as g,m as f,e as i,d as l,f as z}from"./index-Dns8uyf5.js";import{c as w}from"./index-CZ8NzkTl.js";R.init();const t=new k,A=t.get(E),a=A.create();a.name="main";const y=new P(t);y.setup();a.scene=y;const d=document.createElement("bim-viewport"),C=new x(t,d);a.renderer=C;const I=new $(t);a.camera=I;await a.camera.controls.setLookAt(65,19,-27,12.6,-5,-1.4);d.addEventListener("resize",()=>{C.resize(),I.updateAspect()});const N=t.get(D);N.create(a);t.init();const v=t.get(B);v.settings.autoSetWasm=!1;await v.setup({wasm:{absolute:!1,path:"https://unpkg.com/web-ifc@0.0.74/"}});const H="https://thatopen.github.io/engine_fragment/resources/worker.mjs",M=await fetch(H),W=await M.blob(),q=new File([W],"worker.mjs",{type:"text/javascript"}),G=URL.createObjectURL(q),r=t.get(j);r.init(G);a.camera.controls.addEventListener("rest",()=>r.core.update(!0));a.camera.controls.addEventListener("update",()=>r.core.update(!0));const S=t.get(O),c=S.create("Sample",["IFC4"]);c.description="All doors must have FireRating specified in Pset_DoorCommon";const V=new U(t,{type:"simple",parameter:"IFCDOOR"}),J=new _(t,{type:"simple",parameter:"Pset_DoorCommon"},{type:"simple",parameter:"FireRating"});c.applicability.add(V);c.requirements.add(J);const L="sample";r.list.onItemSet.add(({value:e})=>{e.useCamera(a.camera.three),a.scene.three.add(e.object),r.core.update(!0)});const K=["https://thatopen.github.io/engine_components/resources/frags/school_arq.frag"];await Promise.all(K.map(async e=>{var b;if(!((b=e.split("/").pop())==null?void 0:b.split(".").shift()))return null;const F=await(await fetch(e)).arrayBuffer();return r.core.load(F,{modelId:L})}));const u=await c.test([new RegExp(L)]),{fail:Q,pass:T}=S.getModelIdMap(u),m=[r.resetHighlight()];m.push(r.highlight({customId:"green",color:new f("green"),renderedFaces:g.ONE,opacity:1,transparent:!1},T));m.push(r.highlight({customId:"red",color:new f("red"),renderedFaces:g.ONE,opacity:1,transparent:!1},Q));m.push(r.core.update(!0));await Promise.all(m);const[n]=w.idsChart({type:"pie",addLabels:!0,idsResult:u,components:t}),[p]=w.idsChart({type:"bar",addLabels:!1,idsResult:u,components:t}),o=i.create(()=>l`
    <bim-chart-legend>
      <bim-label slot="missing-data">No data to display</bim-label>
      <bim-label slot="no-chart">No chart attached</bim-label>
    </bim-chart-legend>
`);n.addEventListener("data-loaded",()=>{o.charts=[...o.charts,n]});p.addEventListener("data-loaded",()=>{o.charts=[...o.charts,p]});const X=({target:e})=>{e.loading=!0,n.highlight(s=>"value"in s?s.value>100:!1),e.loading=!1},Y=i.create(()=>l`
    <bim-button label="Highlight" @click=${X}></bim-button>
`),Z=({target:e})=>{e.loading=!0,n.filterByValue(s=>"value"in s?s.value>100:!1),e.loading=!1},ee=i.create(()=>l`
    <bim-button label="Filter" @click=${Z}></bim-button>
`),te=({target:e})=>{e.loading=!0,n.reset(),e.loading=!1},ae=i.create(()=>l`
    <bim-button label="Reset" @click=${te}></bim-button>
`),re=i.create(()=>l`
    <bim-panel style="display: flex; flex-direction: column; height: 100%;">
      <bim-panel-section label="IDS Result Pie Chart" icon="raphael:piechart" style="flex: 1;">
        ${n}
      </bim-panel-section>
      <bim-panel-section label="IDS Result Bar Chart" icon="raphael:barchart" style="flex: 1;">
        ${p}
      </bim-panel-section>
      <bim-panel-section label="Labels" icon="raphael:tag" style="flex: 0.1;">
      ${o}
      </bim-panel-section>
      <bim-panel-section label="Actions" style="display: flex; flex-direction: column; gap: 1.5rem;">
        ${Y}
        ${ee}
        ${ae}
      </bim-panel-section> 
    </bim-panel>`),se=t.get(z);se.setup({world:a});const h=document.createElement("bim-grid");h.layouts={main:{template:`
    "chartPanel viewport 3fr"
    /25rem 1fr
    `,elements:{chartPanel:re,viewport:d}}};h.layout="main";document.body.append(h);
