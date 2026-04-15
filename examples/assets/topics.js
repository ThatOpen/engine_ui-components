import{b as i}from"./if-defined-DypSrBBK.js";import{C as D,r as T,f as $,h as r,j as A,M as E}from"./index-6HcFeNjn.js";import{e as M}from"./index-BEcl2n9U.js";import{c as h}from"./index-DicGxPVg.js";const c=new D;T.init();const d=c.get($);d.setup();const B=["Inquiry","Remark","Fault","Request","Clash"],L=["Active","In Progress","Closed"],R=["Minor","Normal","Major"],b=["Alice","Bob","Charlie","David","Eve"],w=["Frank","Grace","Heidi","Ivan","Judy",void 0],P=["Coordination","Execution","Review","Done",void 0],k=["Structural","MEP","Architectural","Urgent","RFC","On-hold"],a=e=>e[Math.floor(Math.random()*e.length)],g=(e,t)=>new Date(e.getTime()+Math.random()*(t.getTime()-e.getTime())),x=Array.from({length:6},()=>g(new Date(2023,0,1),new Date)),f=e=>{const t=a(x),u=Math.random()>.5?g(t,new Date):void 0;return d.create({guid:E.generateUUID(),type:a(B),status:a(L),title:`Topic ${e+1}: Minor issue found on level ${e%3+1}`,priority:a(R),index:e,labels:new Set(k.filter(()=>Math.random()>.7)),creationDate:t,creationAuthor:a(b),modifiedDate:u,modifiedAuthor:u?a(b):void 0,assignedTo:a(w),description:`This is a detailed description for topic ${e+1}. It outlines the issue and the expected resolution.`,stage:a(P)})},F=Array.from({length:20},(e,t)=>f(t)),[o,y]=h.topicsChart({components:c,type:"pie",addLabels:!1}),[l,v]=h.topicsChart({components:c,type:"bar",addLabels:!1});o.label="Pie Chart Data";l.label="Bar Chart Data";o.borderColor="#00000000";l.borderColor="#00000000";const s=r.create(()=>i`
    <bim-chart-legend>
      <bim-label slot="missing-data">No data to display</bim-label>
      <bim-label slot="no-chart">No chart attached</bim-label>
    </bim-chart-legend>
`);o.addEventListener("data-loaded",()=>{s.charts=[...s.charts,o]});l.addEventListener("data-loaded",()=>{s.charts=[...s.charts,l]});const[C,I]=M.topicsList({topics:F,components:c});C.hiddenColumns=["Guid","DueDate","Actions"];const U=({target:e})=>{e.loading=!0,o.highlight(t=>"value"in t?t.value>100:!1),e.loading=!1},G=r.create(()=>i`
    <bim-button label="Highlight" @click=${U}></bim-button>
`),H=({target:e})=>{e.loading=!0,o.filterByValue(t=>"value"in t?t.value>100:!1),e.loading=!1},N=r.create(()=>i`
    <bim-button label="Filter" @click=${H}></bim-button>
`),j=({target:e})=>{e.loading=!0,o.reset(),e.loading=!1},q=r.create(()=>i`
    <bim-button label="Reset" @click=${j}></bim-button>
`),n=document.createElement("bim-dropdown");n.label="Group by";const z=["type","status","priority","creationDate","creationAuthor","modifiedDate","modifiedAuthor","dueDate","assignedTo","stage"];for(const e of z){const t=document.createElement("bim-option");t.label=e,t.value=e,n.appendChild(t)}n.addEventListener("change",()=>{v({grouper:n.value[0]}),y({grouper:n.value[0]}),A.removeMenus()});const m=document.createElement("bim-button");m.label="Randomize";m.addEventListener("click",()=>{d.list.clear(),Array.from({length:20},(e,t)=>f(t)),v(),y(),I()});const S=r.create(()=>i`
    <bim-panel style="display: flex; flex-direction: column; height: 100%; gap: 1rem;">
      <bim-panel-section label="Topics Pie Chart" icon="raphael:piechart" style="flex: 1;">
        ${o}
      </bim-panel-section>
      <bim-panel-section label="Topics Bar Chart" icon="raphael:barchart" style="flex: 1;">
        ${l}
      </bim-panel-section>
      <bim-panel-section label="Labels" icon="raphael:tag" style="flex: 0.1;">
      ${s}
      </bim-panel-section>
      <bim-panel-section label="Actions" style="display: flex; flex-direction: column; gap: 1.5rem;">
        ${n}
        ${m}
        ${G}
        ${N}
        ${q}
      </bim-panel-section>
    </bim-panel>
  `),_=r.create(()=>i`
    <bim-panel>
      <bim-panel-section>
        ${C}
      </bim-panel-section>
    </bim-panel>
  `),p=document.createElement("bim-grid");p.layouts={main:{template:`
    "leftPanel rightPanel"
    / 25rem 1fr
    `,elements:{leftPanel:S,rightPanel:_}}};p.layout="main";document.body.append(p);
