import{b as g}from"./lit-html-CgQwCkHV.js";import{M as I,C as F,b as C}from"./index-D8pO6-HT.js";import{b as y}from"./ref-B0YVjWyu.js";I.init();const T=F.create(()=>{const l=document.createElement("bim-dropdown");l.label="Index Axis";const R=["x","y"];for(const e of R){const t=document.createElement("bim-option");t.value=e,t.label=e.toUpperCase(),l.appendChild(t)}const r=document.createElement("bim-dropdown");r.label="Point Style";const D=["circle","cross","crossRot","dash","line","rect","rectRounded","rectRot","triangle","star"];for(const e of D){const t=document.createElement("bim-option");t.value=e,t.label=e[0].toUpperCase()+e.slice(1),r.appendChild(t)}const c=document.createElement("bim-dropdown");c.label="Line Fill";const B=["origin","start","end","false"];for(const e of B){const t=document.createElement("bim-option");t.value=e,t.label=e[0].toUpperCase()+e.slice(1),c.appendChild(t)}const s=document.createElement("bim-number-input");s.label="Point Radius";const d=document.createElement("bim-checkbox");d.label="X Stacked";const u=document.createElement("bim-checkbox");u.label="Y Stacked";const m=document.createElement("bim-checkbox");m.label="Transparent Background";const b=document.createElement("bim-color-input");b.label="Data Labels Color";const h=document.createElement("bim-color-input");h.label="Border Color";const p=document.createElement("bim-checkbox");p.label="Line Smoothing";const v=document.createElement("bim-checkbox");v.label="Display Labels";const f=document.createElement("bim-number-input");f.label="Bubble Radius";const x=document.createElement("bim-button");x.label="Toggle Loading";const i=["bar","line","pie","radar","doughnut","polarArea","scatter","bubble"],n=[];let k,L=10;const o=()=>Math.floor(Math.random()*200-100),P=()=>({labels:["Orange","Green","Red","Blue","Yellow"],datasets:{dataset1:[{value:o()},{value:o()},{value:o()},{value:o()},{value:o()}],dataset2:[{value:o()},{value:o()},{value:o()}]}}),$=()=>{const e=[],t={},a=[];for(let E=0;E<10;E++)e.push(`Point ${E+1}`),a.push({x:Math.floor(Math.random()*100),y:Math.floor(Math.random()*100),r:L});return t.dataset1=a,{labels:e,datasets:t}},w=(e,t)=>{if(!e)return;const a=e;a.inputData=t==="scatter"||t==="bubble"?$():P(),a.label=t?t.charAt(0).toUpperCase()+t.slice(1):"",a.indexAxis="x",a.linePointStyle="circle",a.lineFill="origin",a.pointRadius=4,a.xStacked=!1,a.yStacked=!1,a.transparentBackground=!1,a.dataLabelsColor="#000000",a.borderColor="#000000",a.smoothLine=!1,a.displayLabels=!1,n.push(a)},A=e=>{e&&(k=e,k.charts=n)},S=e=>{console.log(e.detail)};l.addEventListener("change",()=>{n.forEach(e=>{e.indexAxis=l.value[0]}),C.removeMenus()}),d.addEventListener("change",()=>{n.forEach(e=>{e.xStacked=d.value})}),u.addEventListener("change",()=>{n.forEach(e=>{e.yStacked=u.value})}),r.addEventListener("change",()=>{n.forEach(e=>{e.linePointStyle=r.value[0]}),C.removeMenus()}),s.addEventListener("change",()=>{n.forEach(e=>{e.pointRadius=s.value})}),c.addEventListener("change",()=>{n.forEach(e=>{e.lineFill=c.value[0]}),C.removeMenus()}),m.addEventListener("change",()=>{n.forEach(e=>{e.transparentBackground=m.value})}),b.addEventListener("input",()=>{n.forEach(e=>{e.dataLabelsColor=b.value.color})}),p.addEventListener("change",()=>{n.forEach(e=>{e.smoothLine=p.value})}),v.addEventListener("change",()=>{n.forEach(e=>{e.displayLabels=v.value})}),h.addEventListener("input",()=>{n.forEach(e=>{e.borderColor=h.value.color})}),x.addEventListener("click",()=>{n.forEach(e=>{e.loading=!e.loading})}),f.addEventListener("change",()=>{L=f.value,n.forEach(e=>{e.type==="bubble"&&(e.inputData=$())})}),l.value=["x"],r.value=["circle"],c.value=["origin"],s.value=4,f.value=10,d.checked=!1,u.checked=!1,m.checked=!1,b.value={color:"#000000"},h.value={color:"#000000"},p.checked=!1,v.checked=!1;const M=[];for(let e=0;e<i.length;e+=2){const t=g`
      <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem;">
        <bim-chart type="${i[e]}" @sectionclick=${S} ${y(a=>w(a,i[e]))}></bim-chart>
        ${e+1<i.length?g`<bim-chart type="${i[e+1]}" @sectionclick=${S} ${y(a=>w(a,i[e+1]))}></bim-chart>`:g`<div style="flex: 1;"></div>`}
      </div>
    `;M.push(t)}return g`  <bim-panel label="Charts" style="height: 100vh; display: flex; flex-direction: row; width: 100%; height: 100%; gap: 1rem;">
    <div style="display: flex; flex-direction: row; width: 100%; height: 100%; gap: 1rem;">
      <!-- Left Column: Chart Matrix Dashboard -->
      <div style="flex: 1; display: flex; flex-direction: column; min-width: 0;">
        <bim-panel-section label="📊 Chart Types Dashboard">
          <div style="flex: 1; overflow: auto;">
            ${M}
          </div>
        </bim-panel-section>
      </div>

      <div style="width: 22rem; display: flex; flex-direction: column; gap: 1rem; overflow: auto;">
        <bim-panel-section label="🔑 Legend" style="flex: 0 0 auto;">
          <bim-chart-legend ${y(A)}></bim-chart-legend>
        </bim-panel-section>
  
        <!-- Control Parameters Section -->
        <bim-panel-section label="⚙️ Control Parameters" style="flex: 1; overflow: auto;">
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            ${l}
            ${r}
            ${c}
            ${s}
            ${f}
            ${d}
            ${u}
            ${m}
            ${b}
            ${h}
            ${p}
            ${v}
            ${x}
          </div>
        </bim-panel-section>
      </div>
    </div>
  </bim-panel>`});document.body.append(T);
