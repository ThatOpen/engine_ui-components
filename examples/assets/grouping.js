import{b as u}from"./lit-html-CgQwCkHV.js";import{M as C,C as L}from"./index-D8pO6-HT.js";import"./ref-B0YVjWyu.js";C.init();const p={Originator:{ARC:"Architecture Team",STR:"Structural Engineering Team",MEP:"MEP Engineering Team",ELE:"Electrical Engineering Team",MEC:"Mechanical Engineering Team",PLU:"Plumbing Engineering Team",HVA:"HVAC Engineering Team",FIR:"Fire Protection Team",LND:"Landscape Architecture Team",CIV:"Civil Engineering Team",GEO:"Geotechnical Engineering Team",CON:"Construction Team",PMT:"Project Management Team",QS:"Quantity Surveying Team",HSE:"Health Safety Environment Team"},Discipline:{ARC:"Architecture",STR:"Structural Engineering",MEP:"Mechanical, Electrical & Plumbing",ELE:"Electrical Engineering",MEC:"Mechanical Engineering",PLU:"Plumbing",HVA:"HVAC Systems",FIR:"Fire Protection",LND:"Landscape Architecture",CIV:"Civil Engineering",GEO:"Geotechnical Engineering"},Type:{MOD:"3D Model",DRW:"2D Drawing",SPE:"Specification",SCH:"Schedule/Schedule of Work",CAL:"Calculation Report",REP:"Report",PHO:"Photograph",VID:"Video",DOC:"Document",XLS:"Spreadsheet",PDF:"PDF Document"},System:{BLD:"Building",STR:"Structure",EXT:"External Works",SIT:"Site Infrastructure",MEP:"MEP Systems",FAS:"Facade Systems",INT:"Interior Systems",LAN:"Landscape",TRA:"Transportation",UTI:"Utilities"},Location:{L01:"Level 01 - Ground Floor",L02:"Level 02 - First Floor",L03:"Level 03 - Second Floor",BSM:"Basement Level",ROF:"Roof Level",YRD:"Yard/External Area",GAR:"Garage/Parking",STA:"Stairwell",ELE:"Elevator/Lift",COR:"Corridor/Hallway"},State:{S0:"S0 - Work in Progress",S1:"S1 - Coordination","S1.1":"S1.1 - Initial Coordination","S1.2":"S1.2 - Final Coordination",S2:"S2 - Information","S2.1":"S2.1 - Preliminary Information","S2.2":"S2.2 - Detailed Information",S3:"S3 - Review & Comment","S3.1":"S3.1 - Internal Review",S4:"S4 - Stage Complete",A1:"A1 - Accepted",A2:"A2 - Accepted with Comments",A3:"A3 - Accepted with Conditions",D1:"D1 - Rejected/Deprecated"},Revision:{C01:"C01 - Construction Issue 01",C02:"C02 - Construction Issue 02",C03:"C03 - Construction Issue 03",P01:"P01 - Preliminary Issue 01",P02:"P02 - Preliminary Issue 02",P03:"P03 - Preliminary Issue 03",P05:"P05 - Preliminary Issue 05",T01:"T01 - Test Issue 01",T02:"T02 - Test Issue 02",W01:"W01 - Work Issue 01",W02:"W02 - Work Issue 02",A01:"A01 - Approved Issue 01",D01:"D01 - Draft Issue 01"}},P=[{data:{Name:"",ProjectCode:"HSP",Originator:"ARC",System:"BLD",Location:"L01",Type:"MOD",Discipline:"ARC",Number:"001",Description:"Ground Floor Architectural Model",State:"S4",Revision:"C02"}},{data:{Name:"",ProjectCode:"HSP",Originator:"STR",System:"BLD",Location:"L01",Type:"MOD",Discipline:"STR",Number:"001",Description:"Structural Framework Model",State:"A1",Revision:"C03"}},{data:{Name:"",ProjectCode:"HSP",Originator:"MEP",System:"BLD",Location:"L01",Type:"MOD",Discipline:"MEP",Number:"001",Description:"HVAC System Layout",State:"S3.1",Revision:"P05"}},{data:{Name:"",ProjectCode:"HSP",Originator:"ARC",System:"BLD",Location:"L02",Type:"DRW",Discipline:"ARC",Number:"002",Description:"First Floor Plans and Elevations",State:"S2.2",Revision:"P03"}},{data:{Name:"",ProjectCode:"HSP",Originator:"STR",System:"BLD",Location:"L02",Type:"CAL",Discipline:"STR",Number:"001",Description:"Structural Calculations Report",State:"A2",Revision:"A01"}},{data:{Name:"",ProjectCode:"HSP",Originator:"MEP",System:"EXT",Location:"YRD",Type:"SPE",Discipline:"ELE",Number:"001",Description:"External Electrical Installation Specification",State:"S1.1",Revision:"T02"}},{data:{Name:"",ProjectCode:"HSP",Originator:"LND",System:"EXT",Location:"GRD",Type:"DRW",Discipline:"LND",Number:"001",Description:"Landscape Architecture Master Plan",State:"S4",Revision:"C01"}},{data:{Name:"",ProjectCode:"HSP",Originator:"ARC",System:"BLD",Location:"BSM",Type:"MOD",Discipline:"ARC",Number:"003",Description:"Basement Level Architectural Model",State:"D1",Revision:"D01"}},{data:{Name:"",ProjectCode:"HSP",Originator:"ARC",System:"BLD",Location:"BSM",Type:"MOD",Discipline:"ARC",Number:"003",Description:"Basement Level Architectural Model",State:"D1",Revision:"D01"}},{data:{Name:"",ProjectCode:"HSP",Originator:"STR",System:"BLD",Location:"L02",Type:"MOD",Discipline:"STR",Number:"002",Description:"Second Floor Structural Model",State:"S2.1",Revision:"T01"}},{data:{Name:"",ProjectCode:"HSP",Originator:"MEP",System:"BLD",Location:"L01",Type:"DRW",Discipline:"MEP",Number:"005",Description:"Ground Floor MEP Layout",State:"S1.2",Revision:"C01"}},{data:{Name:"",ProjectCode:"HSP",Originator:"ARC",System:"BLD",Location:"L02",Type:"DRW",Discipline:"ARC",Number:"010",Description:"Second Floor Plans",State:"S3.1",Revision:"P02"}},{data:{Name:"",ProjectCode:"HSP",Originator:"ARC",System:"BLD",Location:"L01",Type:"MOD",Discipline:"ARC",Number:"020",Description:"Work in Progress - Initial Design Model",State:"S0",Revision:"W01"}},{data:{Name:"",ProjectCode:"HSP",Originator:"STR",System:"BLD",Location:"L01",Type:"DRW",Discipline:"STR",Number:"015",Description:"Work in Progress - Foundation Details",State:"S0",Revision:"W02"}},{data:{Name:"",ProjectCode:"HSP",Originator:"MEP",System:"BLD",Location:"L02",Type:"MOD",Discipline:"MEP",Number:"008",Description:"Work in Progress - HVAC Preliminary Layout",State:"S0",Revision:"W01"}}],m=document.createElement("bim-table");m.expanded=!0;m.data=P;m.groupingTransform={State:i=>{const t=String(i);if(t==="S0")return["Work in Progress"];if(t.startsWith("S")&&!t.includes("."))return["Shared Information States",p.State[t]||t];if(t.startsWith("S")&&t.includes(".")){const a=t.split(".")[0],e=p.State[a]||a,o=p.State[t]||t;return["Shared Information States",e,o]}return t.startsWith("A")?["Authorized States",p.State[t]||t]:t.startsWith("D")?["Deprecated States",p.State[t]||t]:[i]},Revision:i=>{const t=String(i),a=t.charAt(0);return[{C:"Construction Revisions",P:"Preliminary Revisions",T:"Test Revisions",D:"Draft Revisions",W:"Work Revisions",A:"Approved Revisions"}[a]||`${a} Revisions`,t]}};m.groupedBy=["State","Discipline","Revision"];const S=(i,t,a)=>{const e=p[i][t]||t,o=a.data._isComputedGroup?"material-symbols:folder-open":"";return u`
    <bim-label icon="${o}" style="font-weight: 500;">
      ${e}
    </bim-label>
  `};m.dataTransform={Name:(i,t)=>{const{ProjectCode:a,Originator:e,System:o,Location:s,Type:r,Discipline:d,Number:b}=t,v=`${a}-${e}-${o}-${s}-${r}-${d}-${b}`,c=p.Type[r]||r;return u`
      <bim-label icon=${c==="3D Model"?"material-symbols:view-in-ar":c==="2D Drawing"?"material-symbols:draft":c==="Specification"?"material-symbols:description":c==="Schedule/Schedule of Work"?"material-symbols:event-note":c==="Calculation Report"?"material-symbols:calculate":c==="Report"?"material-symbols:article":c==="Photograph"?"material-symbols:photo-camera":c==="Video"?"material-symbols:videocam":c==="Document"?"material-symbols:insert-drive-file":c==="Spreadsheet"?"material-symbols:table-chart":c==="PDF Document"?"material-symbols:picture-as-pdf":"material-symbols:insert-drive-file"}>${v}</bim-label>
    `},Discipline:(i,t,a)=>S("Discipline",i,a),Type:(i,t,a)=>S("Type",i,a),System:(i,t,a)=>S("System",i,a),Location:(i,t,a)=>S("Location",i,a),State:(i,t,a)=>{const e=i;if(e==="Work in Progress")return u`
        <bim-label icon="material-symbols:folder-open" style="font-weight: 600;">
          Work in Progress
        </bim-label>
      `;if(e==="Shared Information States")return u`
        <bim-label icon="material-symbols:folder-open" style="font-weight: 600;">
          Shared
        </bim-label>
      `;if(e==="Authorized States")return u`
        <bim-label icon="material-symbols:folder-open" style="font-weight: 600;">
          Authorized/Published
        </bim-label>
      `;if(e==="Deprecated States")return u`
        <bim-label icon="material-symbols:folder-open" style="font-weight: 600;">
          Deprecated
        </bim-label>
      `;const o=p.State[e]||e,s=a.data._isComputedGroup?"material-symbols:folder-open":"";return e==="S0"||e.startsWith("S")||e.startsWith("A")||e.startsWith("D")?u`
        <bim-label icon="${s}" style="font-weight: 500;">
          ${o}
        </bim-label>
      `:o},Originator:(i,t,a)=>S("Originator",i,a),Revision:(i,t,a)=>S("Revision",i,a)};m.hiddenColumns=["ProjectCode","Originator","System","Location","Type","Discipline","Number",...m.groupedBy];const T=["State","Discipline","Location","Type","Revision","Originator","System"],l=[{column:"Discipline",active:!0}],D=(i,t=!1,a=!0)=>{const e=document.createElement("bim-label");e.textContent=i;const o=`
    padding: 0.5rem 1rem;
    border-radius: 6px;
    cursor: ${t?"pointer":"grab"};
    user-select: none;
    transition: all 0.2s ease;
    border: 2px solid transparent;
  `,s=()=>{t?a?e.style.cssText=o+`
          background-color: var(--bim-ui_accent-base);
          color: var(--bim-ui_bg-base);
        `:e.style.cssText=o+`
          background-color: var(--bim-ui_bg-contrast-20);
          opacity: 0.5;
        `:e.style.cssText=o+`
        background-color: var(--bim-ui_bg-contrast-20);
      `};return s(),t?(e.addEventListener("click",()=>{const r=l.find(d=>d.column===i);r&&(r.active=!r.active,a=r.active,s(),g())}),e.addEventListener("dblclick",r=>{r.stopPropagation();const d=l.findIndex(b=>b.column===i);d!==-1&&(l.splice(d,1),f(),g())}),e.draggable=!0,e.addEventListener("dragstart",r=>{r.dataTransfer&&(r.dataTransfer.setData("text/plain",i),r.dataTransfer.setData("source","dropzone"),r.dataTransfer.effectAllowed="move"),e.style.opacity="0.5"}),e.addEventListener("dragend",()=>{e.style.opacity="1",s()}),e.addEventListener("mouseenter",()=>{a?(e.style.backgroundColor="var(--bim-ui_main-base)",e.style.color="var(--bim-ui_main-contrast)"):e.style.backgroundColor="var(--bim-ui_bg-contrast-40)"}),e.addEventListener("mouseleave",()=>{s()})):(e.draggable=!0,e.addEventListener("dragstart",r=>{r.dataTransfer&&(r.dataTransfer.setData("text/plain",i),r.dataTransfer.setData("source","available"),r.dataTransfer.effectAllowed="move"),e.style.opacity="0.5"}),e.addEventListener("dragend",()=>{e.style.opacity="1"}),e.addEventListener("mouseenter",()=>{e.style.backgroundColor="var(--bim-ui_bg-contrast-40)"}),e.addEventListener("mouseleave",()=>{s()})),e},n=document.createElement("div");n.style.cssText=`
  min-height: 3rem;
  border: 2px dashed var(--bim-ui_bg-contrast-40);
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  flex-wrap: wrap;
  transition: all 0.2s ease;
`;n.addEventListener("dragover",i=>{i.preventDefault(),n.style.borderColor="var(--bim-ui_accent-base)",n.style.backgroundColor="var(--bim-ui_accent-base)20"});n.addEventListener("dragleave",()=>{n.style.borderColor="var(--bim-ui_bg-contrast-40)",n.style.backgroundColor="var(--bim-ui_bg-contrast-10)"});n.addEventListener("drop",i=>{var e,o;i.preventDefault();const t=(e=i.dataTransfer)==null?void 0:e.getData("text/plain"),a=(o=i.dataTransfer)==null?void 0:o.getData("source");if(t){if(a==="available")l.some(s=>s.column===t)||(l.push({column:t,active:!0}),f(),g());else if(a==="dropzone"){const s=i.target,d=Array.from(n.querySelectorAll("bim-label")).findIndex(b=>b===s||b.contains(s));d!==-1&&R(t,d)}n.style.borderColor="var(--bim-ui_bg-contrast-40)",n.style.backgroundColor="var(--bim-ui_bg-contrast-10)"}});const g=()=>{const i=l.filter(t=>t.active).map(t=>t.column);i.length>0?m.groupedBy=i:m.groupedBy=[]},R=(i,t)=>{const a=l.findIndex(e=>e.column===i);if(a!==-1&&a!==t){const[e]=l.splice(a,1);l.splice(t,0,e),f(),g()}},y=document.createElement("div");y.style.cssText=`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;const f=()=>{if(n.innerHTML="",y.innerHTML="",l.length===0){const i=document.createElement("bim-label");i.textContent="Drag columns here to create custom grouping",i.style.cssText="opacity: 0.6; font-style: italic;",n.appendChild(i)}else l.forEach((i,t)=>{const a=D(i.column,!0,i.active);if(n.appendChild(a),t<l.length-1){const e=document.createElement("bim-label");e.textContent="→",e.style.cssText="opacity: 0.6; margin: 0 0.25rem;",n.appendChild(e)}});T.forEach(i=>{if(!l.some(t=>t.column===i)){const t=D(i,!1,!0);y.appendChild(t)}})};f();g();const E=({target:i})=>{m.queryString=i.value},h=L.create(()=>u`
    <div style="display: flex; flex-direction: column; gap: 1.5rem; height: 100%; overflow: auto; max-width: 40rem; margin: auto;">
      
      <bim-label style="font-size: 1.5rem; font-weight: bold;color: var(--bim-ui_accent-base)">🏗️ CDE File Grouping Examples (ISO 19650)</bim-label>

      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <bim-label>Create custom data groupings by dragging columns to the drop zone below:</bim-label>
        
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <div>
            <bim-label style="font-weight: 600; margin-bottom: 0.5rem;">Available Columns:</bim-label>
            ${y}
          </div>
          
          <div>
            <bim-label style="font-weight: 600; margin-bottom: 0.5rem;">Drop Zone - Interactive Controls:</bim-label>
            <bim-label style="font-size: 0.9rem; opacity: 0.8; margin-bottom: 0.5rem;">
              Click to toggle active/inactive • Double-click to remove • Drag to reorder
            </bim-label>
            ${n}
          </div>
          <bim-text-input debounce=200 @input=${E} placeholder="Search files..."></bim-text-input>
        </div>
      </div>

      ${m}

    </div>
  `);document.body.append(h);
