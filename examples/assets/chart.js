import{n as L,b as k}from"./if-defined-DypSrBBK.js";import{M as A,C as P,b as x}from"./index-CKW6zj6D.js";A.init();const S=()=>Math.round(Math.random()*180-90),I=()=>Math.round(Math.random()*90+10),v=["Walls","Slabs","Columns","Windows","Doors"],F=()=>({labels:v,datasets:{"Series A":v.map(()=>({value:S()})),"Series B":v.map(()=>({value:S()}))}}),T=()=>({labels:v,datasets:{"Series A":v.map(()=>({value:I()}))}}),$=i=>{const l=[],f=[];for(let o=0;o<12;o++)f.push(`Point ${o+1}`),l.push({x:Math.round(Math.random()*100),y:Math.round(Math.random()*100),r:i});return{labels:f,datasets:{"Series A":l}}},U=P.create(()=>{const i=document.createElement("bim-dropdown");i.label="Index Axis";for(const e of["x","y"]){const t=document.createElement("bim-option");t.value=e,t.label=e.toUpperCase(),i.appendChild(t)}const l=document.createElement("bim-dropdown");l.label="Point Style";const f=["circle","cross","crossRot","dash","line","rect","rectRounded","rectRot","triangle","star"];for(const e of f){const t=document.createElement("bim-option");t.value=e,t.label=e[0].toUpperCase()+e.slice(1),l.appendChild(t)}const o=document.createElement("bim-dropdown");o.label="Line Fill";for(const e of["origin","start","end","false"]){const t=document.createElement("bim-option");t.value=e,t.label=e[0].toUpperCase()+e.slice(1),o.appendChild(t)}const r=document.createElement("bim-number-input");r.label="Point Radius";const c=document.createElement("bim-number-input");c.label="Bubble Radius";const s=document.createElement("bim-checkbox");s.label="X Stacked";const d=document.createElement("bim-checkbox");d.label="Y Stacked";const u=document.createElement("bim-checkbox");u.label="Transparent Background";const m=document.createElement("bim-checkbox");m.label="Line Smoothing";const p=document.createElement("bim-checkbox");p.label="Display Labels";const b=document.createElement("bim-color-input");b.label="Data Labels Color";const h=document.createElement("bim-color-input");h.label="Border Color";const g=document.createElement("bim-button");g.label="Toggle Loading";const w=[{type:"bar",title:"Bar",positive:!1},{type:"line",title:"Line",positive:!1},{type:"radar",title:"Radar",positive:!1},{type:"pie",title:"Pie",positive:!0},{type:"doughnut",title:"Doughnut",positive:!0},{type:"polarArea",title:"Polar Area",positive:!0},{type:"scatter",title:"Scatter",positive:!0},{type:"bubble",title:"Bubble",positive:!0}],n=[];let C,y=10;const M=(e,t,E)=>{if(!e)return;const a=e;a.inputData=t==="scatter"||t==="bubble"?$(y):E?T():F(),a.label="",a.indexAxis="x",a.linePointStyle="circle",a.lineFill="origin",a.pointRadius=4,a.xStacked=!1,a.yStacked=!1,a.transparentBackground=!0,a.dataLabelsColor="#ffffff",a.borderColor="#00000000",a.smoothLine=!0,a.displayLabels=!0,n.push(a)},D=e=>{e&&(C=e,C.charts=n)},B=e=>{console.log(e.detail)};i.addEventListener("change",()=>{n.forEach(e=>{e.indexAxis=i.value[0]}),x.removeMenus()}),s.addEventListener("change",()=>{n.forEach(e=>{e.xStacked=s.value})}),d.addEventListener("change",()=>{n.forEach(e=>{e.yStacked=d.value})}),l.addEventListener("change",()=>{n.forEach(e=>{e.linePointStyle=l.value[0]}),x.removeMenus()}),r.addEventListener("change",()=>{n.forEach(e=>{e.pointRadius=r.value})}),o.addEventListener("change",()=>{n.forEach(e=>{e.lineFill=o.value[0]}),x.removeMenus()}),u.addEventListener("change",()=>{n.forEach(e=>{e.transparentBackground=u.value})}),b.addEventListener("input",()=>{n.forEach(e=>{e.dataLabelsColor=b.value.color})}),m.addEventListener("change",()=>{n.forEach(e=>{e.smoothLine=m.value})}),p.addEventListener("change",()=>{n.forEach(e=>{e.displayLabels=p.value})}),h.addEventListener("input",()=>{n.forEach(e=>{e.borderColor=h.value.color})}),g.addEventListener("click",()=>{n.forEach(e=>{e.loading=!e.loading})}),c.addEventListener("change",()=>{y=c.value,n.forEach(e=>{(e.type==="bubble"||e.type==="scatter")&&(e.inputData=$(y))})}),i.value=["x"],l.value=["circle"],o.value=["origin"],r.value=4,c.value=10,s.checked=!1,d.checked=!1,u.checked=!0,b.value={color:"#ffffff"},h.value={color:"#00000000"},m.checked=!0,p.checked=!0;const R=w.map(({type:e,title:t,positive:E})=>k`
    <div style="
      display: flex;
      flex-direction: column;
      background: var(--bim-ui_bg-contrast-10);
      border-radius: 0.5rem;
      padding: 0.75rem;
      min-height: 18rem;
    ">
      <div style="
        font-size: 0.8rem;
        font-weight: 600;
        color: var(--bim-ui_main-contrast);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 0.5rem;
        opacity: 0.7;
      ">${t}</div>
      <div style="flex: 1; min-height: 0;">
        <bim-chart
          type="${e}"
          @sectionclick=${B}
          ${L(a=>M(a,e,E))}
        ></bim-chart>
      </div>
    </div>
  `);return k`
    <bim-panel label="Charts" style="height: 100%; width: 100%;">
      <div style="
        display: flex;
        flex-direction: row;
        gap: 1rem;
        width: 100%;
        height: 100%;
        padding: 1rem;
        box-sizing: border-box;
      ">
        <!-- Chart grid (left) -->
        <div style="flex: 1; min-width: 0; overflow: auto;">
          <div style="
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
            gap: 1rem;
          ">
            ${R}
          </div>
        </div>

        <!-- Sidebar (right) -->
        <div style="
          width: 22rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          overflow: auto;
        ">
          <bim-panel-section label="🔑 Legend" style="flex: 0 0 auto;">
            <bim-chart-legend ${L(D)}></bim-chart-legend>
          </bim-panel-section>

          <bim-panel-section label="⚙️ Controls" style="flex: 1 1 auto;">
            <div style="display: flex; flex-direction: column; gap: 0.75rem;">
              ${i}
              ${l}
              ${o}
              ${r}
              ${c}
              ${s}
              ${d}
              ${u}
              ${m}
              ${p}
              ${b}
              ${h}
              ${g}
            </div>
          </bim-panel-section>
        </div>
      </div>
    </bim-panel>
  `});document.body.append(U);
