import"./modulepreload-polyfill-B5Qt9EMX.js";import{e as d,i as u,t as p,M as g,C as b,n as h}from"./index-Dt8Sdbv0.js";import{w as f,x as r}from"./state-CdSmRkb4.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const c="important",y=" !"+c,s=d(class extends u{constructor(e){var n;if(super(e),e.type!==p.ATTRIBUTE||e.name!=="style"||((n=e.strings)==null?void 0:n.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((n,i)=>{const o=e[i];return o==null?n:n+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(e,[n]){const{style:i}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(n)),this.render(n);for(const o of this.ft)n[o]==null&&(this.ft.delete(o),o.includes("-")?i.removeProperty(o):i[o]=null);for(const o in n){const t=n[o];if(t!=null){this.ft.add(o);const a=typeof t=="string"&&t.endsWith(y);o.includes("-")||a?i.setProperty(o,a?t.slice(0,-11):t,a?c:""):i[o]=t}}return f}});g.init();const k=b.create(()=>r`
    <bim-panel label="My Panel!">
      <bim-panel-section label="Panel Section" icon="solar:settings-bold">
        <bim-button @click=${()=>{alert("asdasd")}} label="Click me!"></bim-button>
        <bim-selector label="Choose">
          <bim-option label="Option A"></bim-option>
          <bim-option label="Option B" checked></bim-option>
        </bim-selector>
        <bim-color-input></bim-color-input>
        <bim-dropdown>
          <bim-option label="Option A" checked></bim-option>
          <bim-option label="Option B"></bim-option>
          <bim-option label="Option C"></bim-option>
        </bim-dropdown>
      </bim-panel-section>
    </bim-panel>
  `),D=b.create(()=>r`
   <bim-tabs>
    <bim-tab label="Toolbar A">
      <bim-toolbar>
        <bim-toolbar-section label="Some section">
          <bim-button label="Home" vertical icon="ic:round-home"></bim-button>
        </bim-toolbar-section>
      </bim-toolbar>
    </bim-tab>
    <bim-tab label="Toolbar B">
      <bim-toolbar>
        <bim-toolbar-section label="Some other section">
          <bim-button label="Focus" vertical icon="material-symbols:center-focus-strong"></bim-button>
        </bim-toolbar-section>
      </bim-toolbar>
    </bim-tab>
   </bim-tabs> 
  `),T=b.create(()=>r`
    <bim-panel>
      <bim-panel-section label="Assignments" fixed>
        <bim-table ${h(n=>{if(!n)return;const i=n,o={padding:"0.25rem 0.375rem",borderRadius:"0.25rem"};i.dataTransform={Status:t=>{if(typeof t!="string")return t;if(t==="In Progress"){const a={...o,backgroundColor:"#3c59c3",color:"white"};return r`<bim-label style=${s(a)}>${t}</bim-label>`}if(t==="Pending"){const a={...o,backgroundColor:"#5c5c5c",color:"white"};return r`<bim-label style=${s(a)}>${t}</bim-label>`}if(t==="Completed"){const a={...o,backgroundColor:"#3a7829",color:"white"};return r`<bim-label style=${s(a)}>${t}</bim-label>`}if(t==="Scheduled"){const a={...o,backgroundColor:"#9e2980",color:"white"};return r`<bim-label style=${s(a)}>${t}</bim-label>`}return t},AssignedTo:(t,a)=>r`
          <div style="display: flex; gap: 0.5rem">
            <bim-label>${t}</bim-label>
            <bim-button @click=${()=>{const{Task:m}=a;alert(`Will send ${t} a reminder of ${m}!`)}} icon="mingcute:send-fill" tooltip-title="Send reminder!"></bim-button>
          </div> 
        `},i.data=[{data:{Task:"Code Review",Description:"Review code for the new feature implementation",AssignedTo:"Alice",DueDate:"2024-05-20",Status:"In Progress"}},{data:{Task:"Write Documentation",Description:"Write user documentation for the latest release",AssignedTo:"Bob",DueDate:"2024-05-25",Status:"Pending"}},{data:{Task:"Unit Testing",Description:"Create and run unit tests for the new modules",AssignedTo:"Charlie",DueDate:"2024-05-22",Status:"Completed"}},{data:{Task:"Deploy to Staging",Description:"Deploy the current build to the staging environment",AssignedTo:"David",DueDate:"2024-05-18",Status:"Pending"}},{data:{Task:"UI Design",Description:"Design the user interface for the new dashboard",AssignedTo:"Eve",DueDate:"2024-05-30",Status:"In Progress"}},{data:{Task:"Database Migration",Description:"Migrate the database schema to the new version",AssignedTo:"Frank",DueDate:"2024-05-21",Status:"Not Started"}},{data:{Task:"Client Meeting",Description:"Discuss project requirements and deliverables",AssignedTo:"Grace",DueDate:"2024-05-19",Status:"Scheduled"}},{data:{Task:"Bug Fixing",Description:"Fix critical bugs reported by QA",AssignedTo:"Hank",DueDate:"2024-05-23",Status:"In Progress"}},{data:{Task:"Performance Optimization",Description:"Optimize the application for better performance",AssignedTo:"Ivy",DueDate:"2024-05-27",Status:"Pending"}},{data:{Task:"Code Merge",Description:"Merge the feature branch into the main branch",AssignedTo:"Jack",DueDate:"2024-05-24",Status:"Completed"}}]})}></bim-table>
      </bim-panel-section>
    </bim-panel> 
  `),C=b.create(()=>r`
    <bim-panel>
      <bim-panel-section label="Panel Section" icon="solar:settings-bold">
        <bim-button @click=${()=>{alert("asdasd")}} label="Click me!"></bim-button>
        <bim-selector value="Option A">
          <bim-option label="Option A" checked></bim-option>
          <bim-option label="Option B"></bim-option>
        </bim-selector>
      </bim-panel-section>
    </bim-panel>
  `),S=document.createElement("bim-viewport"),l=document.body.querySelector("bim-grid");l.layouts={main:{template:`
      "header header" 80px
      "sidebar content" 1fr
      / 80px 1fr
    `,elements:{header:(()=>{const e=document.createElement("div");return e.style.backgroundColor="#641b1b66",e})(),sidebar:(()=>{const e=document.createElement("div");return e.style.backgroundColor="#1b536466",e})(),content:(()=>{const e=document.createElement("div");return e.style.backgroundColor="#1b644c66",e})()}},app:{template:`
      "ribbon ribbon ribbon" auto
      "leftPanel viewport rightPanel" 2fr
      "leftPanel bottomPanel bottomPanel" 1fr
      / 22rem 1fr 20rem
    `,elements:{ribbon:D,leftPanel:k,viewport:S,bottomPanel:T,rightPanel:C}}};l.addEventListener("layoutchange",()=>{l.layout?alert(`Your have changed to "${l.layout}" layout!`):alert("Your have cleaned up your layout!")});const w=document.body.querySelector("bim-button");w.addEventListener("click",()=>{const{layout:e}=l;switch(e){case void 0:l.layout="main";break;case"main":l.layout="app";break;case"app":l.layout=void 0;break;default:console.log("No follow up action")}});
