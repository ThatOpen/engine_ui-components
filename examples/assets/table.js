import"./modulepreload-polyfill-B5Qt9EMX.js";import{M as p,n as m}from"./index-Ce4JvBbE.js";import{x as d}from"./state-CdSmRkb4.js";p.init();const t=document.body.querySelector("bim-table");t.addEventListener("rowcreated",({detail:o})=>{const{row:e}=o;e.style.borderBottom="1px solid var(--bim-ui_bg-contrast-20)"});t.dataTransform={Age:(o,e)=>{const{Name:n}=e;if(n==="Lisa")return d`
        <bim-number-input @change=${c=>{const i=c.target;e.Age=i.value}} slider min="23" value=${o} max="45"></bim-number-input>
      `;if(n==="Laura"){const a=i=>{const r=i.target;alert(`${e.Name}'s age is ${r.value}.`),e.Age=r.value};return d`
        <bim-selector ${m(i=>{if(!i)return;const r=i;r.value=e.Age})} @change=${a}>
          <bim-option label="👶" value="3"></bim-option>
          <bim-option label="👨" value="32"></bim-option>
          <bim-option label="👴" value="80"></bim-option>
        </bim-selector>
      `}return o},Career:(o,e)=>{const{Name:n,Career:a}=e;if(n==="Lisa"){const c=r=>{const s=r.target;e.Career=s.value[0]};return d`
        <bim-dropdown required ${m(r=>{if(!r)return;const s=r;s.value=[a]})} @change=${c}>
          <bim-option label="Civil Engineer"></bim-option>
          <bim-option label="Architect"></bim-option>
        </bim-dropdown>
      `}return n==="Laura"?`${n} is ${a}`:o},Comments:(o,e)=>{if(typeof o!="string")return o;const n=document.createElement("bim-text-input");return n.value=o,n.addEventListener("input",()=>e.Comments=n.value),n}};const b=await(await fetch("https://thatopen.github.io/engine_ui-components/resources/table-data.json")).json();t.data=b.slice(0,1);t.columns=[{name:"Entity",width:"12rem"}];t.hiddenColumns=["Name"];const g=document.getElementById("print-data");g.addEventListener("click",()=>{console.log(t.value)});const v=document.getElementById("download-data");v.addEventListener("click",()=>{t.downloadData()});const h=document.getElementById("copy-csv");h.addEventListener("click",async()=>{await navigator.clipboard.writeText(t.csv)});const y=document.getElementById("copy-tsv");y.addEventListener("click",async()=>{await navigator.clipboard.writeText(t.tsv)});const l=document.getElementById("search-box");l.addEventListener("input",()=>{t.queryString=l.value});const u=document.getElementById("preserve-structure");t.preserveStructureOnFilter=u.checked;u.addEventListener("change",()=>{t.preserveStructureOnFilter=u.checked});
