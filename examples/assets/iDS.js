import"./lit-html-CgQwCkHV.js";import{l as R,C as k,W as E,S as P,a as x,b as $,G as D,I as O,F as B,g as j,h as M,j as U,z as g,k as f,e as i,d as l,i as _}from"./index-DPXt1yPz.js";import{c as w}from"./index-W5lz_szl.js";R.init();const t=new k,z=t.get(E),a=z.create();a.name="main";const y=new P(t);y.setup();a.scene=y;const m=document.createElement("bim-viewport"),C=new x(t,m);a.renderer=C;const I=new $(t);a.camera=I;await a.camera.controls.setLookAt(65,19,-27,12.6,-5,-1.4);m.addEventListener("resize",()=>{C.resize(),I.updateAspect()});const A=t.get(D);A.create(a);t.init();const v=t.get(O);v.settings.autoSetWasm=!1;await v.setup({wasm:{absolute:!1,path:"https://unpkg.com/web-ifc@0.0.74/"}});const N="https://thatopen.github.io/engine_fragment/resources/worker.mjs",H=await fetch(N),W=await H.blob(),q=new File([W],"worker.mjs",{type:"text/javascript"}),G=URL.createObjectURL(q),s=t.get(B);s.init(G);a.camera.controls.addEventListener("update",()=>s.core.update());s.core.models.materials.list.onItemSet.add(({value:e})=>{"isLodMaterial"in e&&e.isLodMaterial||(e.polygonOffset=!0,e.polygonOffsetUnits=1,e.polygonOffsetFactor=Math.random())});const S=t.get(j),c=S.create("Sample",["IFC4"]);c.description="All doors must have FireRating specified in Pset_DoorCommon";const V=new M(t,{type:"simple",parameter:"IFCDOOR"}),J=new U(t,{type:"simple",parameter:"Pset_DoorCommon"},{type:"simple",parameter:"FireRating"});c.applicability.add(V);c.requirements.add(J);const L="sample";s.list.onItemSet.add(({value:e})=>{e.useCamera(a.camera.three),a.scene.three.add(e.object),s.core.update(!0)});const K=["https://thatopen.github.io/engine_components/resources/frags/school_arq.frag"];await Promise.all(K.map(async e=>{var b;if(!((b=e.split("/").pop())==null?void 0:b.split(".").shift()))return null;const F=await(await fetch(e)).arrayBuffer();return s.core.load(F,{modelId:L})}));const h=await c.test([new RegExp(L)]),{fail:Q,pass:T}=S.getModelIdMap(h),p=[s.resetHighlight()];p.push(s.highlight({customId:"green",color:new f("green"),renderedFaces:g.ONE,opacity:1,transparent:!1},T));p.push(s.highlight({customId:"red",color:new f("red"),renderedFaces:g.ONE,opacity:1,transparent:!1},Q));p.push(s.core.update(!0));await Promise.all(p);const[r]=w.idsChart({type:"pie",addLabels:!0,idsResult:h,components:t}),[d]=w.idsChart({type:"bar",addLabels:!1,idsResult:h,components:t}),o=i.create(()=>l`
    <bim-chart-legend>
      <bim-label slot="missing-data">No data to display</bim-label>
      <bim-label slot="no-chart">No chart attached</bim-label>
    </bim-chart-legend>
`);r.addEventListener("data-loaded",()=>{o.charts=[...o.charts,r]});d.addEventListener("data-loaded",()=>{o.charts=[...o.charts,d]});const X=({target:e})=>{e.loading=!0,r.highlight(n=>"value"in n?n.value>100:!1),e.loading=!1},Y=i.create(()=>l`
    <bim-button label="Highlight" @click=${X}></bim-button>
`),Z=({target:e})=>{e.loading=!0,r.filterByValue(n=>"value"in n?n.value>100:!1),e.loading=!1},ee=i.create(()=>l`
    <bim-button label="Filter" @click=${Z}></bim-button>
`),te=({target:e})=>{e.loading=!0,r.reset(),e.loading=!1},ae=i.create(()=>l`
    <bim-button label="Reset" @click=${te}></bim-button>
`),se=i.create(()=>l`
    <bim-panel style="display: flex; flex-direction: column; height: 100%;">
      <bim-panel-section label="IDS Result Pie Chart" icon="raphael:piechart" style="flex: 1;">
        ${r}
      </bim-panel-section>
      <bim-panel-section label="IDS Result Bar Chart" icon="raphael:barchart" style="flex: 1;">
        ${d}
      </bim-panel-section>
      <bim-panel-section label="Labels" icon="raphael:tag" style="flex: 0.1;">
      ${o}
      </bim-panel-section>
      <bim-panel-section label="Actions" style="display: flex; flex-direction: column; gap: 1.5rem;">
        ${Y}
        ${ee}
        ${ae}
      </bim-panel-section> 
    </bim-panel>`),ne=t.get(_);ne.setup({world:a});const u=document.createElement("bim-grid");u.layouts={main:{template:`
    "chartPanel viewport 3fr"
    /25rem 1fr
    `,elements:{chartPanel:se,viewport:m}}};u.layout="main";document.body.append(u);
