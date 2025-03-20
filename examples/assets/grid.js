import"./modulepreload-polyfill-B5Qt9EMX.js";import{M as u,C as b}from"./index-W5V5HNuJ.js";import"./state-DYefyXr3.js";import{T as d,x as l}from"./lit-html-paDGiEfB.js";import{a as p,i as g,t as h,n as f}from"./ref-CInB0H-f.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const c="important",k=" !"+c,s=p(class extends g{constructor(e){var i;if(super(e),e.type!==h.ATTRIBUTE||e.name!=="style"||((i=e.strings)==null?void 0:i.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((i,n)=>{const o=e[n];return o==null?i:i+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(e,[i]){const{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(i)),this.render(i);for(const o of this.ft)i[o]==null&&(this.ft.delete(o),o.includes("-")?n.removeProperty(o):n[o]=null);for(const o in i){const t=i[o];if(t!=null){this.ft.add(o);const a=typeof t=="string"&&t.endsWith(k);o.includes("-")||a?n.setProperty(o,a?t.slice(0,-11):t,a?c:""):n[o]=t}}return d}});u.init();const y=b.create(()=>l`
    <bim-panel label="My Panel!">
      <bim-panel-section label="Panel Section" icon="solar:settings-bold">
        <bim-label>This is just a panel section... cool, right?</bim-label>
        <bim-button @click=${()=>{alert("You clicked me!")}} label="Click me!"></bim-button>
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
        <bim-text-input label="Ultra nice text input" placeholder="Write something..."></bim-text-input>
        <bim-checkbox label="Is That Open Company nice?" checked></bim-checkbox>
        <bim-number-input label="I'm a number input :)" pref="#" suffix="un"></bim-number-input>
      </bim-panel-section>
    </bim-panel>
  `),D=b.create(()=>l`
   <bim-tabs>
    <bim-tab label="Toolbar A">
      <bim-toolbar>
        <bim-toolbar-section label="Some section">
          <bim-button label="Home" vertical icon="ic:round-home"></bim-button>
          <bim-button label="That Open People" vertical icon="eva:people-fill" @click=${()=>open("https://people.thatopen.com/home")}></bim-button>
          <bim-toolbar-group>
            <bim-button icon="solar:settings-bold"></bim-button>
            <bim-button icon="solar:settings-bold"></bim-button>
            <bim-button icon="solar:settings-bold"></bim-button>
            <bim-button icon="solar:settings-bold"></bim-button>
          </bim-toolbar-group>
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
  `),T=b.create(()=>l`
    <bim-panel>
      <bim-panel-section label="Assignments" fixed>
        <bim-table ${f(i=>{if(!i)return;const n=i,o={padding:"0.25rem 0.375rem",borderRadius:"0.25rem"};n.dataTransform={Status:t=>{if(typeof t!="string")return t;if(t==="In Progress"){const a={...o,backgroundColor:"#3c59c3",color:"white"};return l`<bim-label style=${s(a)}>${t}</bim-label>`}if(t==="Pending"){const a={...o,backgroundColor:"#5c5c5c",color:"white"};return l`<bim-label style=${s(a)}>${t}</bim-label>`}if(t==="Completed"){const a={...o,backgroundColor:"#3a7829",color:"white"};return l`<bim-label style=${s(a)}>${t}</bim-label>`}if(t==="Scheduled"){const a={...o,backgroundColor:"#9e2980",color:"white"};return l`<bim-label style=${s(a)}>${t}</bim-label>`}return t},AssignedTo:(t,a)=>l`
          <div style="display: flex; gap: 0.5rem">
            <bim-label>${t}</bim-label>
            <bim-button @click=${()=>{const{Task:m}=a;alert(`Will send ${t} a reminder of ${m}!`)}} icon="mingcute:send-fill" tooltip-title="Send reminder!"></bim-button>
          </div> 
        `},n.data=[{data:{Task:"Code Review",Description:"Review code for the new feature implementation",AssignedTo:"Alice",DueDate:"2024-05-20",Status:"In Progress"}},{data:{Task:"Write Documentation",Description:"Write user documentation for the latest release",AssignedTo:"Bob",DueDate:"2024-05-25",Status:"Pending"}},{data:{Task:"Unit Testing",Description:"Create and run unit tests for the new modules",AssignedTo:"Charlie",DueDate:"2024-05-22",Status:"Completed"}},{data:{Task:"Deploy to Staging",Description:"Deploy the current build to the staging environment",AssignedTo:"David",DueDate:"2024-05-18",Status:"Pending"}},{data:{Task:"UI Design",Description:"Design the user interface for the new dashboard",AssignedTo:"Eve",DueDate:"2024-05-30",Status:"In Progress"}},{data:{Task:"Database Migration",Description:"Migrate the database schema to the new version",AssignedTo:"Frank",DueDate:"2024-05-21",Status:"Not Started"}},{data:{Task:"Client Meeting",Description:"Discuss project requirements and deliverables",AssignedTo:"Grace",DueDate:"2024-05-19",Status:"Scheduled"}},{data:{Task:"Bug Fixing",Description:"Fix critical bugs reported by QA",AssignedTo:"Hank",DueDate:"2024-05-23",Status:"In Progress"}},{data:{Task:"Performance Optimization",Description:"Optimize the application for better performance",AssignedTo:"Ivy",DueDate:"2024-05-27",Status:"Pending"}},{data:{Task:"Code Merge",Description:"Merge the feature branch into the main branch",AssignedTo:"Jack",DueDate:"2024-05-24",Status:"Completed"}}]})}></bim-table>
      </bim-panel-section>
    </bim-panel> 
  `),C=b.create(()=>l`
    <bim-panel>
      <bim-panel-section label="Panel Section" icon="solar:settings-bold">
        <bim-button @click=${()=>{alert("You are awesome 😏")}} label="Click me!"></bim-button>
        <bim-selector value="Option A">
          <bim-option label="Option A" checked></bim-option>
          <bim-option label="Option B"></bim-option>
        </bim-selector>
      </bim-panel-section>
    </bim-panel>
  `),P=document.createElement("bim-viewport"),r=document.body.querySelector("bim-grid");r.layouts={main:{template:`
      "header header" 80px
      "sidebar content" 1fr
      / 80px 1fr
    `,elements:{header:(()=>{const e=document.createElement("div");return e.style.backgroundColor="#641b1b66",e})(),sidebar:(()=>{const e=document.createElement("div");return e.style.backgroundColor="#1b536466",e})(),content:(()=>{const e=document.createElement("div");return e.style.backgroundColor="#1b644c66",e})()}},app:{template:`
      "ribbon ribbon ribbon" auto
      "leftPanel viewport rightPanel" 2fr
      "leftPanel bottomPanel bottomPanel" 1fr
      / 22rem 1fr 20rem
    `,elements:{ribbon:D,leftPanel:y,viewport:P,bottomPanel:T,rightPanel:C}}};r.addEventListener("layoutchange",()=>{r.layout?alert(`Your have changed to "${r.layout}" layout!`):alert("Your have cleaned up your layout!")});const S=document.body.querySelector("bim-button");S.addEventListener("click",()=>{const{layout:e}=r;switch(e){case void 0:r.layout="main";break;case"main":r.layout="app";break;case"app":r.layout=void 0;break;default:console.log("No follow up action")}});
