import"./modulepreload-polyfill-B5Qt9EMX.js";import{M as d,C as s}from"./index-DDTAtGfQ.js";import"./state-VyZkHw6A.js";import{T as h,x as b}from"./lit-html-CuBe1DX_.js";import{a as D,i as T,t as f,n as y}from"./ref-DfidMTJ6.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const p="important",k=" !"+p,r=D(class extends T{constructor(t){var n;if(super(t),t.type!==f.ATTRIBUTE||t.name!=="style"||((n=t.strings)==null?void 0:n.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((n,i)=>{const o=t[i];return o==null?n:n+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(t,[n]){const{style:i}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(n)),this.render(n);for(const o of this.ft)n[o]==null&&(this.ft.delete(o),o.includes("-")?i.removeProperty(o):i[o]=null);for(const o in n){const e=n[o];if(e!=null){this.ft.add(o);const a=typeof e=="string"&&e.endsWith(k);o.includes("-")||a?i.setProperty(o,a?e.slice(0,-11):e,a?p:""):i[o]=e}}return h}});d.init();const m=s.create(()=>b`
    <bim-panel label="My Panel" icon="mynaui:panel-left-solid" style="width: 24rem;">
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
  `),c=s.create(()=>b`
    <bim-panel label="Table" icon="material-symbols:table" style="height: 25rem">
      <bim-panel-section label="Assignments" fixed>
        <bim-table ${y(n=>{if(!n)return;const i=n,o={padding:"0.25rem 0.375rem",borderRadius:"0.25rem"};i.dataTransform={Status:e=>{if(typeof e!="string")return e;if(e==="In Progress"){const a={...o,backgroundColor:"#3c59c3",color:"white"};return b`<bim-label style=${r(a)}>${e}</bim-label>`}if(e==="Pending"){const a={...o,backgroundColor:"#5c5c5c",color:"white"};return b`<bim-label style=${r(a)}>${e}</bim-label>`}if(e==="Completed"){const a={...o,backgroundColor:"#3a7829",color:"white"};return b`<bim-label style=${r(a)}>${e}</bim-label>`}if(e==="Scheduled"){const a={...o,backgroundColor:"#9e2980",color:"white"};return b`<bim-label style=${r(a)}>${e}</bim-label>`}return e},AssignedTo:(e,a)=>b`
          <div style="display: flex; gap: 0.5rem">
            <bim-label>${e}</bim-label>
            <bim-button @click=${()=>{const{Task:g}=a;alert(`Will send ${e} a reminder of ${g}!`)}} icon="mingcute:send-fill" tooltip-title="Send reminder!"></bim-button>
          </div> 
        `},i.data=[{data:{Task:"Code Review",Description:"Review code for the new feature implementation",AssignedTo:"Alice",DueDate:"2024-05-20",Status:"In Progress"},children:[{data:{Task:"Code Review - Round 1",Description:"First pass code review",AssignedTo:"Alice",DueDate:"2024-05-18",Status:"Completed"}},{data:{Task:"Address Comments",Description:"Address the comments from the first round of review",AssignedTo:"Author of Code",DueDate:"2024-05-19",Status:"In Progress"}},{data:{Task:"Code Review - Round 2",Description:"Second pass code review after addressing comments",AssignedTo:"Alice",DueDate:"2024-05-20",Status:"Pending"}},{data:{Task:"Merge Code",Description:"Merge reviewed code after final approval",AssignedTo:"Project Lead",DueDate:"2024-05-21",Status:"Not Started"}}]},{data:{Task:"Write Documentation",Description:"Write user documentation for the latest release",AssignedTo:"Bob",DueDate:"2024-05-25",Status:"Pending"}},{data:{Task:"Unit Testing",Description:"Create and run unit tests for the new modules",AssignedTo:"Charlie",DueDate:"2024-05-22",Status:"Completed"},children:[{data:{Task:"Create Test Cases",Description:"Identify and document all necessary test cases",AssignedTo:"Charlie",DueDate:"2024-05-19",Status:"Completed"}},{data:{Task:"Implement Unit Tests",Description:"Write the actual unit tests based on the test cases",AssignedTo:"Charlie",DueDate:"2024-05-20",Status:"Completed"}},{data:{Task:"Run Unit Tests",Description:"Execute the unit tests and analyze the results",AssignedTo:"Charlie",DueDate:"2024-05-21",Status:"Completed"}},{data:{Task:"Fix Failing Tests",Description:"Address any failing unit tests and correct the code",AssignedTo:"Charlie",DueDate:"2024-05-22",Status:"Completed"}},{data:{Task:"Refactor Code",Description:"Improve the code structure and readability",AssignedTo:"Charlie",DueDate:"2024-05-23",Status:"Completed"}}]},{data:{Task:"Deploy to Staging",Description:"Deploy the current build to the staging environment",AssignedTo:"David",DueDate:"2024-05-18",Status:"Pending"},children:[{data:{Task:"Prepare Build Package",Description:"Create the deployable package for the application",AssignedTo:"David",DueDate:"2024-05-16",Status:"Completed"}},{data:{Task:"Configure Staging Environment",Description:"Set up the staging environment with necessary configurations",AssignedTo:"David",DueDate:"2024-05-17",Status:"Completed"}},{data:{Task:"Upload Build Package",Description:"Upload the build package to the staging server",AssignedTo:"David",DueDate:"2024-05-18",Status:"Completed"}},{data:{Task:"Run Deployment Script",Description:"Execute the deployment script to deploy the application",AssignedTo:"David",DueDate:"2024-05-18",Status:"In Progress"}},{data:{Task:"Verify Deployment",Description:"Check the application in the staging environment to ensure proper deployment",AssignedTo:"David",DueDate:"2024-05-19",Status:"Pending"}}]},{data:{Task:"UI Design",Description:"Design the user interface for the new dashboard",AssignedTo:"Eve",DueDate:"2024-05-30",Status:"In Progress"}},{data:{Task:"Database Migration",Description:"Migrate the database schema to the new version",AssignedTo:"Frank",DueDate:"2024-05-21",Status:"Not Started"}},{data:{Task:"Client Meeting",Description:"Discuss project requirements and deliverables",AssignedTo:"Grace",DueDate:"2024-05-19",Status:"Scheduled"}},{data:{Task:"Bug Fixing",Description:"Fix critical bugs reported by QA",AssignedTo:"Hank",DueDate:"2024-05-23",Status:"In Progress"}},{data:{Task:"Performance Optimization",Description:"Optimize the application for better performance",AssignedTo:"Ivy",DueDate:"2024-05-27",Status:"Pending"}},{data:{Task:"Code Merge",Description:"Merge the feature branch into the main branch",AssignedTo:"Jack",DueDate:"2024-05-24",Status:"Completed"}}]})}></bim-table>
      </bim-panel-section>
    </bim-panel> 
  `),u=s.create(()=>b`
    <bim-panel label="Right Panel" icon="mynaui:panel-right-solid" style="width: 20rem">
      <bim-panel-section label="Panel Section" icon="solar:settings-bold">
        <bim-button label="Button With Nestings">
          <bim-context-menu>
            <bim-button label="Nested Button A" tooltip-title="asdasdasd" tooltip-text="asdasdasd">
              <bim-context-menu>
                <bim-button label="Nested Button A-1"></bim-button>
                <bim-button label="Nested Button A-2"></bim-button>
              </bim-context-menu>
            </bim-button>
            <bim-button label="Nested Button B"></bim-button>
            <bim-button @click=${()=>{alert("You are awesome 😏")}} label="Click me!"></bim-button>
          </bim-context-menu>
        </bim-button>
        <bim-selector value="Option A">
          <bim-option label="Option A" checked></bim-option>
          <bim-option label="Option B"></bim-option>
          <bim-option label="Option C"></bim-option>
        </bim-selector>
      </bim-panel-section>
    </bim-panel>
  `),C=s.create(()=>{const t=()=>window.open("https://people.thatopen.com/home"),n=()=>{d.toggleTheme()},{activationButton:i}=u,{activationButton:o}=m,{activationButton:e}=c;return i.vertical=!0,o.vertical=!0,e.vertical=!0,b`
   <bim-tabs>
    <bim-tab label="Toolbar A">
      <bim-toolbar>
        <bim-toolbar-section label="Some section">
          <bim-button @click=${n} label="Toggle Theme" vertical icon="proicons:dark-theme"></bim-button>
          <bim-button label="Home" vertical icon="ic:round-home"></bim-button>
          ${m.activationButton}
          <bim-button label="That Open People" vertical icon="eva:people-fill" @click=${t}></bim-button>
          ${u.activationButton}
          ${c.activationButton}
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
  `}),v=s.create(()=>{const t=s.create(()=>b`
    <bim-tabs floating style="justify-self: center; border-radius: 0.5rem;">
      <bim-tab label="Import">
        <bim-toolbar>
          <bim-toolbar-section label="Open Formats">
            <bim-button label="IFC"></bim-button>
            <bim-button label="BCF"></bim-button>
            <bim-button label="IDS"></bim-button>
            <bim-button label="DXF"></bim-button>
          </bim-toolbar-section>
          <bim-toolbar-section label="External">
            <bim-button label="RVT"></bim-button>
            <bim-button label="PDF"></bim-button>
            <bim-button label="DWG"></bim-button>
          </bim-toolbar-section>
        </bim-toolbar>
      </bim-tab>
      <bim-tab label="Elements">
        <bim-toolbar>
          <bim-toolbar-section label="Visibility">
            <bim-button label="Show All"></bim-button>
            <bim-button label="Hide All"></bim-button>
            <bim-button label="Hide In View"></bim-button>
          </bim-toolbar-section>
          <bim-toolbar-section label="Selection">
            <bim-button label="All"></bim-button>
            <bim-button label="Deselect"></bim-button>
            <bim-button label="In View"></bim-button>
          </bim-toolbar-section>
        </bim-toolbar>
      </bim-tab>
      <bim-tab label="Measurement">
        <bim-toolbar>
          <bim-toolbar-section label="Tools">
            <bim-button label="Area"></bim-button>
            <bim-button label="Angle"></bim-button>
            <bim-button label="Volume"></bim-button>
            <bim-button label="Laser"></bim-button>
            <bim-button label="Edge"></bim-button>
            <bim-button label="Face"></bim-button>
          </bim-toolbar-section>
        </bim-toolbar>      
      </bim-tab>
    </bim-tabs>
  `),n=s.create(()=>b`
    <bim-toolbar vertical style="align-self: start;">
      <bim-toolbar-section>
        <bim-button icon="solar:cursor-bold" tooltip-title="Element Selection" tooltip-text="💡 Change the selection mode to individual elements"></bim-button>
        <bim-button icon="carbon:area"></bim-button>
        <bim-button icon="oui:vis-area-stacked"></bim-button>
      </bim-toolbar-section>
      <bim-toolbar-section>
        <bim-button icon="ix:element-filled"></bim-button>
        <bim-button icon="material-symbols:table"></bim-button>
      </bim-toolbar-section>
    </bim-toolbar>
  `),i=document.createElement("bim-grid");return i.floating=!0,i.layouts={main:{template:`
      "empty rightToolbar" 1fr
      "bottomToolbar bottomToolbar" auto
      /1fr
    `,elements:{bottomToolbar:t,rightToolbar:n}}},i.layout="main",b`
    <bim-viewport>${i}</bim-viewport>
  `}),l=document.body.querySelector("bim-grid");l.layouts={main:{template:`
      "header header" 80px
      "sidebar content" 1fr
      / 80px 1fr
    `,elements:{header:(()=>{const t=document.createElement("div");return t.style.backgroundColor="#641b1b66",t})(),sidebar:(()=>{const t=document.createElement("div");return t.style.backgroundColor="#1b536466",t})(),content:(()=>{const t=document.createElement("div");return t.style.backgroundColor="#1b644c66",t})()}},app:{template:`
      "ribbon ribbon ribbon" auto
      "leftPanel viewport rightPanel" 1fr
      "leftPanel bottomPanel bottomPanel" auto
      / auto 1fr auto
    `,elements:{ribbon:C,leftPanel:m,viewport:v,bottomPanel:c,rightPanel:u}}};l.addEventListener("layoutchange",()=>{l.layout?alert(`Your have changed to "${l.layout}" layout!`):alert("Your have cleaned up your layout!")});const A=document.body.querySelector("bim-button");A.addEventListener("click",()=>{const{layout:t}=l;switch(t){case void 0:l.layout="main";break;case"main":l.layout="app";break;case"app":l.layout=void 0;break;default:console.log("No follow up action")}});
