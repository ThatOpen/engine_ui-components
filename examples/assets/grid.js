import{b as i}from"./lit-html-CgQwCkHV.js";import{M as h,C as n,o as m}from"./index-BBmfVPxR.js";import{b as D}from"./ref-B0YVjWyu.js";h.init();const c=()=>i`
  <bim-tooltip style="width: 18rem;">
    <bim-label style="font-weight: bold; font-size: 0.9rem;">Title</bim-label>
    <bim-label style="white-space: normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</bim-label>
    <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmIyaHpuaGM5OWx4dXluZGxtZHR3c25rNm1qZWhza3k3azF0bGxhciZlcD12MV9naWZzX3NlYXJjaCZjdD1n/gXXFrjHFJIMoqKr8UT/giphy.gif" alt="funny gif" style="width: 100%; border-radius: 0.5rem;" />
  </bim-tooltip>
`,T=e=>i`
    <bim-panel-section label="Panel Section" icon="solar:settings-bold">
      <bim-label>This is just a panel section... cool, right?</bim-label>
      <bim-button @click=${()=>{alert("You clicked me!")}} label="Click me!"></bim-button>
      <bim-selector label="Choose">
        <bim-option label="Option A"></bim-option>
        <bim-option label="Option B" checked>
          ${n.create(c)}
        </bim-option>
      </bim-selector>
      <bim-color-input></bim-color-input>
      <bim-dropdown search-box>
        ${Array.from({length:100},(a,b)=>i`<bim-option style="width: 12rem;" label="Option ${b+1}"></bim-option>`)}
      </bim-dropdown>
      <bim-text-input label="Ultra nice text input" placeholder="Write something..."></bim-text-input>
      <bim-checkbox label="Is That Open Company nice?" checked></bim-checkbox>
      <bim-number-input label="I'm a number input :)" pref="#" suffix="un"></bim-number-input>
    </bim-panel-section>
  `,k=e=>i`
    <bim-panel-section label="Element Properties" icon="solar:bill-list-bold">
      <bim-text-input label="Name" value="Wall:Basic Wall"></bim-text-input>
      <bim-text-input label="Type" value="Basic Wall"></bim-text-input>
      <bim-number-input label="Height" value="4" suffix="m"></bim-number-input>
      <bim-number-input label="Width" value="0.3" suffix="m"></bim-number-input>
      <bim-checkbox label="Load Bearing" checked></bim-checkbox>
      <bim-checkbox label="Structural"></bim-checkbox>
    </bim-panel-section>
  `,r=n.create(()=>{const e=s=>{if(!s)return;const a=s,b={padding:"0.25rem 0.375rem",borderRadius:"0.25rem"};a.dataTransform={Status:t=>{if(typeof t!="string")return t;if(t==="In Progress"){const o={...b,backgroundColor:"#3c59c3",color:"white"};return i`<bim-label style=${m(o)}>
            ${t}
            ${n.create(c)}
          </bim-label>`}if(t==="Pending"){const o={...b,backgroundColor:"#5c5c5c",color:"white"};return i`<bim-label style=${m(o)}>${t}</bim-label>`}if(t==="Completed"){const o={...b,backgroundColor:"#3a7829",color:"white"};return i`<bim-label style=${m(o)}>${t}</bim-label>`}if(t==="Scheduled"){const o={...b,backgroundColor:"#9e2980",color:"white"};return i`<bim-label style=${m(o)}>${t}</bim-label>`}return t},AssignedTo:(t,o)=>i`
          <div style="display: flex; gap: 0.5rem">
            <bim-label>${t}</bim-label>
            <bim-button @click=${()=>{const{Task:g}=o;alert(`Will send ${t} a reminder of ${g}!`)}} icon="mingcute:send-fill" tooltip-title="Send reminder!"></bim-button>
          </div>
        `},a.data=[{data:{Task:"Code Review",Description:"Review code for the new feature implementation",AssignedTo:"Alice",DueDate:"2024-05-20",Status:"In Progress"},children:[{data:{Task:"Code Review - Round 1",Description:"First pass code review",AssignedTo:"Alice",DueDate:"2024-05-18",Status:"Completed"}},{data:{Task:"Address Comments",Description:"Address the comments from the first round of review",AssignedTo:"Author of Code",DueDate:"2024-05-19",Status:"In Progress"}},{data:{Task:"Code Review - Round 2",Description:"Second pass code review after addressing comments",AssignedTo:"Alice",DueDate:"2024-05-20",Status:"Pending"}},{data:{Task:"Merge Code",Description:"Merge reviewed code after final approval",AssignedTo:"Project Lead",DueDate:"2024-05-21",Status:"Not Started"}}]},{data:{Task:"Write Documentation",Description:"Write user documentation for the latest release",AssignedTo:"Bob",DueDate:"2024-05-25",Status:"Pending"}},{data:{Task:"Unit Testing",Description:"Create and run unit tests for the new modules",AssignedTo:"Charlie",DueDate:"2024-05-22",Status:"Completed"},children:[{data:{Task:"Create Test Cases",Description:"Identify and document all necessary test cases",AssignedTo:"Charlie",DueDate:"2024-05-19",Status:"Completed"}},{data:{Task:"Implement Unit Tests",Description:"Write the actual unit tests based on the test cases",AssignedTo:"Charlie",DueDate:"2024-05-20",Status:"Completed"}},{data:{Task:"Run Unit Tests",Description:"Execute the unit tests and analyze the results",AssignedTo:"Charlie",DueDate:"2024-05-21",Status:"Completed"}},{data:{Task:"Fix Failing Tests",Description:"Address any failing unit tests and correct the code",AssignedTo:"Charlie",DueDate:"2024-05-22",Status:"Completed"}},{data:{Task:"Refactor Code",Description:"Improve the code structure and readability",AssignedTo:"Charlie",DueDate:"2024-05-23",Status:"Completed"}}]},{data:{Task:"Deploy to Staging",Description:"Deploy the current build to the staging environment",AssignedTo:"David",DueDate:"2024-05-18",Status:"Pending"},children:[{data:{Task:"Prepare Build Package",Description:"Create the deployable package for the application",AssignedTo:"David",DueDate:"2024-05-16",Status:"Completed"}},{data:{Task:"Configure Staging Environment",Description:"Set up the staging environment with necessary configurations",AssignedTo:"David",DueDate:"2024-05-17",Status:"Completed"}},{data:{Task:"Upload Build Package",Description:"Upload the build package to the staging server",AssignedTo:"David",DueDate:"2024-05-18",Status:"Completed"}},{data:{Task:"Run Deployment Script",Description:"Execute the deployment script to deploy the application",AssignedTo:"David",DueDate:"2024-05-18",Status:"In Progress"}},{data:{Task:"Verify Deployment",Description:"Check the application in the staging environment to ensure proper deployment",AssignedTo:"David",DueDate:"2024-05-19",Status:"Pending"}}]},{data:{Task:"UI Design",Description:"Design the user interface for the new dashboard",AssignedTo:"Eve",DueDate:"2024-05-30",Status:"In Progress"}},{data:{Task:"Database Migration",Description:"Migrate the database schema to the new version",AssignedTo:"Frank",DueDate:"2024-05-21",Status:"Not Started"}},{data:{Task:"Client Meeting",Description:"Discuss project requirements and deliverables",AssignedTo:"Grace",DueDate:"2024-05-19",Status:"Scheduled"}},{data:{Task:"Bug Fixing",Description:"Fix critical bugs reported by QA",AssignedTo:"Hank",DueDate:"2024-05-23",Status:"In Progress"}},{data:{Task:"Performance Optimization",Description:"Optimize the application for better performance",AssignedTo:"Ivy",DueDate:"2024-05-27",Status:"Pending"}},{data:{Task:"Code Merge",Description:"Merge the feature branch into the main branch",AssignedTo:"Jack",DueDate:"2024-05-24",Status:"Completed"}},{data:{Task:"Code Review",Description:"Final review before release",AssignedTo:"Alice",DueDate:"2024-05-22",Status:"Pending"}},{data:{Task:"Bug Fixing",Description:"Fix UI bugs reported by QA",AssignedTo:"Hank",DueDate:"2024-05-24",Status:"In Progress"}},{data:{Task:"Bug Fixing",Description:"Fix backend bugs reported by QA",AssignedTo:"Hank",DueDate:"2024-05-25",Status:"Pending"}},{data:{Task:"Write Documentation",Description:"Update API documentation",AssignedTo:"Bob",DueDate:"2024-05-26",Status:"Pending"}},{data:{Task:"Write Documentation",Description:"Review documentation for accuracy",AssignedTo:"Bob",DueDate:"2024-05-27",Status:"In Progress"}}]};return i`
    <bim-panel-section label="Assignments" fixed>
      <div style="display: flex; align-self: end; width: fit-content; gap: 0.25rem;">
        <bim-label>Group By:</bim-label>
        <bim-button label="Task" @click=${onGroupByTask}></bim-button>
        <bim-button label="Assignee" @click=${onGroupByAssignee}></bim-button>
        <bim-button label="Status" @click=${onGroupByStatus}></bim-button>
        <bim-button label="None" @click=${onUngroup}></bim-button>
      </div>
      <bim-table ${D(e)}></bim-table>
    </bim-panel-section>
  `}),f=e=>i`
    <bim-toolbar>
      <bim-toolbar-section label="Import">
        <bim-button label="IFC" vertical icon="bim:ifc"></bim-button>
        <bim-button label="BCF" vertical icon="bim:bcf"></bim-button>
        <bim-button label="IDS" vertical icon="bim:ids"></bim-button>
        <bim-button label="DXF" vertical icon="bim:dxf"></bim-button>
        <bim-button label="DWG" vertical icon="bim:dwg" ></bim-button>
        <bim-button label="PDF" vertical icon="bim:pdf" ></bim-button>
        <bim-button label="RVT" vertical icon="bim:rvt" ></bim-button>
      </bim-toolbar-section>
      <bim-toolbar-section label="Some section">
        <bim-button @click=${()=>{const t=document.querySelector("html");t&&(t.classList.contains("bim-ui-dark")?t.classList.replace("bim-ui-dark","bim-ui-light"):t.classList.contains("bim-ui-light")&&t.classList.replace("bim-ui-light","bim-ui-dark"))}} label="Toggle Theme" vertical icon="proicons:dark-theme"></bim-button>
        <bim-button label="Home" vertical icon="ic:round-home"></bim-button>
        <bim-button label="That Open People" vertical icon="eva:people-fill" @click=${()=>window.open("https://people.thatopen.com/home")}></bim-button>
        <bim-button active @click=${({target:t})=>{const o=r.style.display==="none";t.active=o,o?r.style.removeProperty("display"):r.style.display="none"}} label="Table" vertical icon="material-symbols:table"></bim-button>
        <bim-toolbar-group>
          <bim-button icon="solar:settings-bold"></bim-button>
          <bim-button icon="solar:settings-bold"></bim-button>
          <bim-button icon="solar:settings-bold"></bim-button>
          <bim-button icon="solar:settings-bold"></bim-button>
        </bim-toolbar-group>
      </bim-toolbar-section>
    </bim-toolbar>
  `,y=e=>i`
    <bim-toolbar>
      <bim-toolbar-section label="Some other section">
        <bim-button label="Focus" vertical icon="material-symbols:center-focus-strong"></bim-button>
      </bim-toolbar-section>
    </bim-toolbar>
  `,C=n.create(()=>{const e=()=>{alert("You are awesome 😏")};return i`
    <bim-panel-section label="Controls" icon="solar:settings-bold">
      <bim-button label="Button With Nestings">
        <bim-context-menu>
          <bim-button label="Nested Button A">
            <bim-context-menu>
              <bim-button label="Nested Button A-1">
                ${n.create(c)}
              </bim-button>
              <bim-button label="Nested Button A-2"></bim-button>
            </bim-context-menu>
          </bim-button>
          <bim-button label="Nested Button B"></bim-button>
          <bim-button @click=${e} label="Click me!"></bim-button>
        </bim-context-menu>
      </bim-button>
      <bim-selector value="Option A">
        <bim-option label="Option A" checked></bim-option>
        <bim-option label="Option B"></bim-option>
        <bim-option label="Option C"></bim-option>
      </bim-selector>
    </bim-panel-section>
  `}),v=n.create(()=>i`
    <bim-panel-section label="Scene Info" icon="solar:info-circle-bold">
      <bim-text-input label="Project" value="My BIM Project"></bim-text-input>
      <bim-text-input label="Author" value="That Open Company"></bim-text-input>
      <bim-number-input label="Elements" value="1024" readonly></bim-number-input>
      <bim-checkbox label="Show grid" checked></bim-checkbox>
      <bim-checkbox label="Show axes"></bim-checkbox>
    </bim-panel-section>
  `),p=n.create(()=>{const e=n.create(()=>i`
    <bim-tabs floating style="justify-self: center;">
      <bim-tab label="Import">
        <bim-toolbar>
          <bim-toolbar-section label="Open Formats">
            <bim-button label="IFC"></bim-button>
            <bim-button label="BCF"></bim-button>
            <bim-button label="IDS"></bim-button>
            <bim-button label="DXF"></bim-button>
          </bim-toolbar-section>
          <bim-toolbar-section label="External">
            <bim-button label="RVT">
              ${n.create(c)}
            </bim-button>
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
  `),s=n.create(()=>i`
    <bim-toolbar vertical style="align-self: start;">
      <bim-toolbar-section>
        <bim-button icon="solar:cursor-bold"></bim-button>
        <bim-button icon="carbon:area"></bim-button>
        <bim-button icon="oui:vis-area-stacked"></bim-button>
      </bim-toolbar-section>
      <bim-toolbar-section>
        <bim-button icon="ix:element-filled"></bim-button>
        <bim-button icon="material-symbols:table"></bim-button>
      </bim-toolbar-section>
    </bim-toolbar>
  `),a=document.createElement("bim-grid");return a.floating=!0,a.style.padding="0",a.layouts={main:{template:`
      "empty rightToolbar" 1fr
      "bottomToolbar bottomToolbar" auto
      /1fr
    `,elements:{bottomToolbar:e,rightToolbar:s}}},a.layout="main",i`
    <bim-viewport>${a}</bim-viewport>
  `}),l=document.body.querySelector("bim-grid");l.elements={header:(()=>{const e=document.createElement("div");return e.style.backgroundColor="#641b1b66",e})(),sidebar:(()=>{const e=document.createElement("div");return e.style.backgroundColor="#1b536466",e})(),content:(()=>{const e=document.createElement("div");return e.style.backgroundColor="#1b644c66",e})(),toolbarA:{template:f,initialState:{},label:"Toolbar A"},toolbarB:{template:y,initialState:{},label:"Toolbar B"},leftPanelSettings:{template:T,initialState:{},label:"Settings"},leftPanelProperties:{template:k,initialState:{},label:"Properties"},viewport:p,bottomPanel:r,rightPanelControls:C,rightPanelInfo:v};const u="tabs:ribbon(toolbarA,toolbarB)",d="tabs:left(leftPanelSettings,leftPanelProperties)",A="panel:right(rightPanelControls,rightPanelInfo)";l.areaGroups={left:{switchersCompact:!0},right:{label:"Inspector"}};l.layouts={main:{template:`
      "header header" 80px
      "sidebar content" 1fr
      / 80px 1fr
    `},app:{template:`
      "${u} ${u} ${u}" auto
      "${d} viewport ${A}" 1fr
      "${d} bottomPanel bottomPanel" 20rem
      / 22rem 1fr 20rem
    `,elements:{ribbon,leftPanel,viewport:p,bottomPanel:r,rightPanel}}};l.addEventListener("layoutchange",()=>{l.layout?alert(`Your have changed to "${l.layout}" layout!`):alert("Your have cleaned up your layout!")});const S=document.body.querySelector("bim-button");S.addEventListener("click",()=>{const{layout:e}=l;switch(e){case void 0:l.layout="main";break;case"main":l.layout="app";break;case"app":l.layout=void 0;break;default:console.log("No follow up action")}});
