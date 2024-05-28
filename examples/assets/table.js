import"./modulepreload-polyfill-B5Qt9EMX.js";import{M as p,n as m}from"./index-BRdHpjwg.js";import{x as d}from"./state-CdSmRkb4.js";p.init();const n=document.body.querySelector("bim-table");n.addEventListener("rowcreated",({detail:o})=>{const{row:e}=o;e.style.borderBottom="1px solid var(--bim-ui_bg-contrast-20)"});n.dataTransform={Age:(o,e)=>{const{Name:t}=e;if(t==="Lisa")return d`
        <bim-number-input @change=${c=>{const i=c.target;e.Age=i.value}} slider min="23" value=${o} max="45"></bim-number-input>
      `;if(t==="Laura"){const a=i=>{const r=i.target;alert(`${e.Name}'s age is ${r.value}.`),e.Age=r.value};return d`
        <bim-selector ${m(i=>{if(!i)return;const r=i;r.value=e.Age})} @change=${a}>
          <bim-option label="👶" value="3"></bim-option>
          <bim-option label="👨" value="32"></bim-option>
          <bim-option label="👴" value="80"></bim-option>
        </bim-selector>
      `}return o},Career:(o,e)=>{const{Name:t,Career:a}=e;if(t==="Lisa"){const c=r=>{const s=r.target;e.Career=s.value[0]};return d`
        <bim-dropdown required ${m(r=>{if(!r)return;const s=r;s.value=[a]})} @change=${c}>
          <bim-option label="Civil Engineer"></bim-option>
          <bim-option label="Architect"></bim-option>
        </bim-dropdown>
      `}return t==="Laura"?`${t} is ${a}`:o},Comments:(o,e)=>{if(typeof o!="string")return o;const t=document.createElement("bim-text-input");return t.value=o,t.addEventListener("input",()=>e.Comments=t.value),t}};const b=await(await fetch("https://thatopen.github.io/engine_ui-components/resources/table-data.json")).json();n.data=b;n.columns=[{name:"Entity",width:"12rem"}];const g=document.getElementById("print-data");g.addEventListener("click",()=>{console.log(n.value)});const v=document.getElementById("download-data");v.addEventListener("click",()=>{n.downloadData()});const h=document.getElementById("copy-csv");h.addEventListener("click",async()=>{await navigator.clipboard.writeText(n.csv)});const y=document.getElementById("copy-tsv");y.addEventListener("click",async()=>{await navigator.clipboard.writeText(n.tsv)});const l=document.getElementById("search-box");l.addEventListener("input",()=>{n.queryString=l.value});const u=document.getElementById("preserve-structure");n.preserveStructureOnFilter=u.checked;u.addEventListener("change",()=>{n.preserveStructureOnFilter=u.checked});
