import"./modulepreload-polyfill-B5Qt9EMX.js";import{M as b,x as n,C as u,n as p}from"./index-N3h3khDV.js";b.registerComponents();const t=document.body.querySelector("bim-table");t.rows=[{onRowCreated(e){e.addEventListener("click",async()=>{})},data:{Name:"Jhon",Age:"28",Career:"Civil Engineer",Comments:document.createElement("bim-text-input")},children:[{data:{Name:"James",Age:"20",Career:"Unemployed",Comments:document.createElement("bim-text-input")}},{data:{Name:"Lisa",Age:()=>n`
              <bim-number-input slider min="23" value="27" max="45"></bim-number-input>
            `,Career:()=>n`
              <bim-dropdown required>
                <bim-option label="Civil Engineer"></bim-option>
                <bim-option label="Architect"></bim-option>
              </bim-dropdown>
            `,Comments:document.createElement("bim-text-input")}}]},{data:{Name:"George",Age:"32",Career:"Architect",Comments:document.createElement("bim-text-input")},children:[{data:{Name:"Laura",Age:e=>n`
              <bim-selector-input @change=${i=>{const m=i.target;alert(`${e.Name}'s age is ${m.value}.`)}}>
                <bim-option label="👶" value="3"></bim-option>
                <bim-option label="👨" value="32"></bim-option>
                <bim-option label="👴" value="80"></bim-option>
              </bim-selector-input>
            `,get Career(){return"Name"in this?`${this.Name} is studying`:"Is studying"},Comments:document.createElement("bim-text-input")}},{data:(()=>{const e={12:"Too baby",20:"Is doing That Open Master!",35:"BIM Software Developer"},r=Object.keys(e)[0],[i,m]=u.create(s=>n`<bim-label label=${s.career}></bim-label>`,{career:e[r]});let l=!1;return{Name:"Elizabeth",Age:u.create(()=>n`
              <bim-dropdown @change=${a=>{const c=a.target.value[0],o=e[c];m({career:o})}} ${p(a=>{if(!a||l)return;const d=a;for(const c in e){const o=document.createElement("bim-option");o.label=c,d.append(o)}d.value=[r],l=!0})}></bim-dropdown>
            `),Career:i,Comments:document.createElement("bim-text-input")}})()}]}];t.columns=[{name:"Name",width:"10rem"}];const g=document.getElementById("new-row");g.addEventListener("click",()=>{const e={data:{Name:"Bart",Age:2},children:[{data:{Name:"Homer",Age:80}}]};t.rows=[...t.rows,e]});const C=document.getElementById("print-data");C.addEventListener("click",async()=>{console.log(await t.value)});const w=document.getElementById("download-data");w.addEventListener("click",()=>{t.downloadData()});
