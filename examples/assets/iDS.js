import{b as i}from"./if-defined-DypSrBBK.js";import{r as R,C as k,W as D,S as E,a as P,b as x,G as $,I as O,F as B,k as M,l as U,m as j,n as g,o as f,h as l,D as _}from"./index-6HcFeNjn.js";import{c as w}from"./index-DicGxPVg.js";R.init();const t=new k,A=t.get(D),a=A.create();a.name="main";const y=new E(t);y.setup();a.scene=y;const m=document.createElement("bim-viewport"),C=new P(t,m);a.renderer=C;const I=new x(t);a.camera=I;await a.camera.controls.setLookAt(65,19,-27,12.6,-5,-1.4);m.addEventListener("resize",()=>{C.resize(),I.updateAspect()});const N=t.get($);N.create(a);t.init();const v=t.get(O);v.settings.autoSetWasm=!1;await v.setup({wasm:{absolute:!1,path:"https://unpkg.com/web-ifc@0.0.77/"}});const G="https://thatopen.github.io/engine_fragment/resources/worker.mjs",H=await fetch(G),W=await H.blob(),q=new File([W],"worker.mjs",{type:"text/javascript"}),z=URL.createObjectURL(q),r=t.get(B);r.init(z);a.camera.controls.addEventListener("update",()=>r.core.update());r.core.models.materials.list.onItemSet.add(({value:e})=>{"isLodMaterial"in e&&e.isLodMaterial||(e.polygonOffset=!0,e.polygonOffsetUnits=1,e.polygonOffsetFactor=Math.random())});const S=t.get(M),p=S.create("Sample",["IFC4"]);p.description="All doors must have FireRating specified in Pset_DoorCommon";const V=new U(t,{type:"simple",parameter:"IFCDOOR"}),J=new j(t,{type:"simple",parameter:"Pset_DoorCommon"},{type:"simple",parameter:"FireRating"});p.applicability.add(V);p.requirements.add(J);const L="sample";r.list.onItemSet.add(({value:e})=>{e.useCamera(a.camera.three),a.scene.three.add(e.object),r.core.update(!0)});const K=["https://thatopen.github.io/engine_components/resources/frags/school_arq.frag"];await Promise.all(K.map(async e=>{var b;if(!((b=e.split("/").pop())==null?void 0:b.split(".").shift()))return null;const F=await(await fetch(e)).arrayBuffer();return r.core.load(F,{modelId:L})}));const h=await p.test([new RegExp(L)]),{fail:Q,pass:T}=S.getModelIdMap(h),d=[r.resetHighlight()];d.push(r.highlight({customId:"green",color:new f("green"),renderedFaces:g.ONE,opacity:1,transparent:!1},T));d.push(r.highlight({customId:"red",color:new f("red"),renderedFaces:g.ONE,opacity:1,transparent:!1},Q));d.push(r.core.update(!0));await Promise.all(d);const[s]=w.idsChart({type:"pie",addLabels:!0,idsResult:h,components:t}),[c]=w.idsChart({type:"bar",addLabels:!1,idsResult:h,components:t});s.borderColor="#00000000";c.borderColor="#00000000";const o=l.create(()=>i`
    <bim-chart-legend>
      <bim-label slot="missing-data">No data to display</bim-label>
      <bim-label slot="no-chart">No chart attached</bim-label>
    </bim-chart-legend>
`);s.addEventListener("data-loaded",()=>{o.charts=[...o.charts,s]});c.addEventListener("data-loaded",()=>{o.charts=[...o.charts,c]});const X=({target:e})=>{e.loading=!0,s.highlight(n=>"value"in n?n.value>100:!1),e.loading=!1},Y=l.create(()=>i`
    <bim-button label="Highlight" @click=${X}></bim-button>
`),Z=({target:e})=>{e.loading=!0,s.filterByValue(n=>"value"in n?n.value>100:!1),e.loading=!1},ee=l.create(()=>i`
    <bim-button label="Filter" @click=${Z}></bim-button>
`),te=({target:e})=>{e.loading=!0,s.reset(),e.loading=!1},ae=l.create(()=>i`
    <bim-button label="Reset" @click=${te}></bim-button>
`),re=l.create(()=>i`
    <bim-panel style="display: flex; flex-direction: column; height: 100%;">
      <bim-panel-section label="IDS Result Pie Chart" icon="raphael:piechart" style="flex: 1;">
        ${s}
      </bim-panel-section>
      <bim-panel-section label="IDS Result Bar Chart" icon="raphael:barchart" style="flex: 1;">
        ${c}
      </bim-panel-section>
      <bim-panel-section label="Labels" icon="raphael:tag" style="flex: 0.1;">
      ${o}
      </bim-panel-section>
      <bim-panel-section label="Actions" style="display: flex; flex-direction: column; gap: 1.5rem;">
        ${Y}
        ${ee}
        ${ae}
      </bim-panel-section> 
    </bim-panel>`),se=t.get(_);se.setup({world:a});const u=document.createElement("bim-grid");u.layouts={main:{template:`
    "chartPanel viewport 3fr"
    /25rem 1fr
    `,elements:{chartPanel:re,viewport:m}}};u.layout="main";document.body.append(u);
