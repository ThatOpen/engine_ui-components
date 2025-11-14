import"./lit-html-BUQgm8fs.js";import{u as c,C as l,W as d,S as p,a as u,b,G as g,I as w,F as f,V as C,f as v}from"./index-DAd_Xb3m.js";import{b as L}from"./index-ChzsFr2R.js";import{e as h}from"./index-BnaeDa9G.js";c.init();const e=new l,S=e.get(d),t=S.create();t.name="main";const r=new p(e);r.setup();t.scene=r;const o=document.createElement("bim-viewport"),i=new u(e,o);t.renderer=i;const m=new b(e);t.camera=m;o.addEventListener("resize",()=>{i.resize(),m.updateAspect()});const F=e.get(g);F.create(t);e.init();const I=e.get(w);await I.setup();const n=e.get(f);n.init("https://thatopen.github.io/engine_fragment/resources/worker.mjs");t.camera.controls.addEventListener("rest",()=>n.core.update(!0));n.list.onItemSet.add(async({value:a})=>{a.useCamera(t.camera.three),t.scene.three.add(a.object),await n.core.update(!0)});const[y]=h.modelsList({components:e,metaDataTags:["schema"],actions:{download:!0}}),E=C.create(()=>{const[a]=L.loadFrag({components:e});return v`
   <bim-panel label="IFC Models">
    <bim-panel-section label="Importing">
      ${a}
    </bim-panel-section>
    <bim-panel-section icon="mage:box-3d-fill" label="Loaded Models">
      ${y}
    </bim-panel-section>
   </bim-panel> 
  `}),s=document.createElement("bim-grid");s.layouts={main:{template:`
      "panel viewport"
      / 23rem 1fr
    `,elements:{panel:E,viewport:o}}};s.layout="main";document.body.append(s);
