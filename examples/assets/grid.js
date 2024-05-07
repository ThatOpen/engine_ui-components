import"./modulepreload-polyfill-B5Qt9EMX.js";import{M as o,C as a,x as n}from"./index-N3h3khDV.js";o.registerComponents();const e=document.body.querySelector("bim-grid");e.layouts={main:`
    "header header" 80px
    "sidebar content" 1fr
    / 80px 1fr
  `,app:`
    "c-toolbars-ribbon c-toolbars-ribbon c-toolbars-ribbon" 80px
    "c-panels-left viewport c-panels-right" 1fr
    "c-panels-left viewport c-panels-right" 1fr
    "c-panels-left c-panels-bottom c-panels-bottom" 1fr
    / 28rem 1fr 20rem
  `};e.addEventListener("layout-change",()=>{e.layout?alert(`Your have changed to "${e.layout}" layout!`):alert("Your have cleaned up your layout!")});const l=document.body.querySelector("bim-button");l.addEventListener("click",()=>{const{layout:t}=e;switch(t){case void 0:e.layout="main";break;case"main":e.layout="app";break;case"app":e.layout=void 0;break;default:console.log("No follow up action")}});const i=e.getContainer("panels","left",!0),r=a.create(()=>n`
    <bim-panel label="My Panel!" active>
      <bim-panel-section label="Panel Section" icon="solar:settings-bold">
        <bim-button @click=${()=>{alert("asdasd")}} label="Click me!"></bim-button>
        <bim-selector-input label="Click me!">
          <bim-option label="Option A"></bim-option>
          <bim-option label="Option B"></bim-option>
        </bim-selector-input>
      </bim-panel-section>
    </bim-panel>
  `);i.append(r);
