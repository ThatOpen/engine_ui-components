import"./lit-html-CgQwCkHV.js";import{C as D,l as T,B as $,e as i,d as l,H as A,M as E}from"./index-DPXt1yPz.js";import{e as M}from"./index-COyobJWa.js";import{c as h}from"./index-W5lz_szl.js";const c=new D;T.init();const d=c.get($);d.setup();const B=["Inquiry","Remark","Fault","Request","Clash"],L=["Active","In Progress","Closed"],R=["Minor","Normal","Major"],b=["Alice","Bob","Charlie","David","Eve"],w=["Frank","Grace","Heidi","Ivan","Judy",void 0],P=["Coordination","Execution","Review","Done",void 0],k=["Structural","MEP","Architectural","Urgent","RFC","On-hold"],a=e=>e[Math.floor(Math.random()*e.length)],g=(e,t)=>new Date(e.getTime()+Math.random()*(t.getTime()-e.getTime())),x=Array.from({length:6},()=>g(new Date(2023,0,1),new Date)),f=e=>{const t=a(x),u=Math.random()>.5?g(t,new Date):void 0;return d.create({guid:E.generateUUID(),type:a(B),status:a(L),title:`Topic ${e+1}: Minor issue found on level ${e%3+1}`,priority:a(R),index:e,labels:new Set(k.filter(()=>Math.random()>.7)),creationDate:t,creationAuthor:a(b),modifiedDate:u,modifiedAuthor:u?a(b):void 0,assignedTo:a(w),description:`This is a detailed description for topic ${e+1}. It outlines the issue and the expected resolution.`,stage:a(P)})},F=Array.from({length:20},(e,t)=>f(t)),[o,y]=h.topicsChart({components:c,type:"pie",addLabels:!1}),[s,v]=h.topicsChart({components:c,type:"bar",addLabels:!1});o.label="Pie Chart Data";s.label="Bar Chart Data";const r=i.create(()=>l`
    <bim-chart-legend>
      <bim-label slot="missing-data">No data to display</bim-label>
      <bim-label slot="no-chart">No chart attached</bim-label>
    </bim-chart-legend>
`);o.addEventListener("data-loaded",()=>{r.charts=[...r.charts,o]});s.addEventListener("data-loaded",()=>{r.charts=[...r.charts,s]});const[C,H]=M.topicsList({topics:F,components:c});C.hiddenColumns=["Guid","DueDate","Actions"];const I=({target:e})=>{e.loading=!0,o.highlight(t=>"value"in t?t.value>100:!1),e.loading=!1},U=i.create(()=>l`
    <bim-button label="Highlight" @click=${I}></bim-button>
`),G=({target:e})=>{e.loading=!0,o.filterByValue(t=>"value"in t?t.value>100:!1),e.loading=!1},N=i.create(()=>l`
    <bim-button label="Filter" @click=${G}></bim-button>
`),q=({target:e})=>{e.loading=!0,o.reset(),e.loading=!1},z=i.create(()=>l`
    <bim-button label="Reset" @click=${q}></bim-button>
`),n=document.createElement("bim-dropdown");n.label="Group by";const S=["type","status","priority","creationDate","creationAuthor","modifiedDate","modifiedAuthor","dueDate","assignedTo","stage"];for(const e of S){const t=document.createElement("bim-option");t.label=e,t.value=e,n.appendChild(t)}n.addEventListener("change",()=>{v({grouper:n.value[0]}),y({grouper:n.value[0]}),A.removeMenus()});const m=document.createElement("bim-button");m.label="Randomize";m.addEventListener("click",()=>{d.list.clear(),Array.from({length:20},(e,t)=>f(t)),v(),y(),H()});const _=i.create(()=>l`
    <bim-panel style="display: flex; flex-direction: column; height: 100%; gap: 1rem;">
      <bim-panel-section label="Topics Pie Chart" icon="raphael:piechart" style="flex: 1;">
        ${o}
      </bim-panel-section>
      <bim-panel-section label="Topics Bar Chart" icon="raphael:barchart" style="flex: 1;">
        ${s}
      </bim-panel-section>
      <bim-panel-section label="Labels" icon="raphael:tag" style="flex: 0.1;">
      ${r}
      </bim-panel-section>
      <bim-panel-section label="Actions" style="display: flex; flex-direction: column; gap: 1.5rem;">
        ${n}
        ${m}
        ${U}
        ${N}
        ${z}
      </bim-panel-section>
    </bim-panel>
  `),j=i.create(()=>l`
    <bim-panel>
      <bim-panel-section>
        ${C}
      </bim-panel-section>
    </bim-panel>
  `),p=document.createElement("bim-grid");p.layouts={main:{template:`
    "leftPanel rightPanel"
    / 25rem 1fr
    `,elements:{leftPanel:_,rightPanel:j}}};p.layout="main";document.body.append(p);
