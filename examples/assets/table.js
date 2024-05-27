import"./modulepreload-polyfill-B5Qt9EMX.js";import{M as p,n as m}from"./index-laUBdS2o.js";import{x as u}from"./state-CdSmRkb4.js";p.init();const n=document.body.querySelector("bim-table");n.definition={Age:(r,t)=>{const{Name:e}=t;if(e==="Lisa")return u`
        <bim-number-input @change=${c=>{const i=c.target;t.Age=i.value}} slider min="23" value=${r} max="45"></bim-number-input>
      `;if(e==="Laura"){const a=i=>{const o=i.target;alert(`${t.Name}'s age is ${o.value}.`),t.Age=o.value};return u`
        <bim-selector ${m(i=>{if(!i)return;const o=i;o.value=t.Age})} @change=${a}>
          <bim-option label="👶" value="3"></bim-option>
          <bim-option label="👨" value="32"></bim-option>
          <bim-option label="👴" value="80"></bim-option>
        </bim-selector>
      `}return r},Career:(r,t)=>{const{Name:e,Career:a}=t;if(e==="Lisa"){const c=o=>{const s=o.target;t.Career=s.value[0]};return u`
        <bim-dropdown required ${m(o=>{if(!o)return;const s=o;s.value=[a]})} @change=${c}>
          <bim-option label="Civil Engineer"></bim-option>
          <bim-option label="Architect"></bim-option>
        </bim-dropdown>
      `}return e==="Laura"?`${e} is ${a}`:r},Comments:(r,t)=>{if(typeof r!="string")return r;const e=document.createElement("bim-text-input");return e.value=r,e.addEventListener("input",()=>t.Comments=e.value),e}};const b=await(await fetch("https://thatopen.github.io/engine_ui-components/resources/table-data.json")).json();n.data=b;n.columns=[{name:"Entity",width:"12rem"}];const g=document.getElementById("print-data");g.addEventListener("click",()=>{console.log(n.value)});const v=document.getElementById("download-data");v.addEventListener("click",()=>{n.downloadData()});const h=document.getElementById("copy-csv");h.addEventListener("click",async()=>{await navigator.clipboard.writeText(n.csv)});const y=document.getElementById("copy-tsv");y.addEventListener("click",async()=>{await navigator.clipboard.writeText(n.tsv)});const l=document.getElementById("search-box");l.addEventListener("input",()=>{n.queryString=l.value});const d=document.getElementById("preserve-structure");n.preserveStructureOnFilter=d.checked;d.addEventListener("change",()=>{n.preserveStructureOnFilter=d.checked});
