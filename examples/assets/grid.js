import{x as a}from"./lit-html-BUQgm8fs.js";import{M as s,C as l}from"./index-JvVqNY9f.js";import"./ref-CLKbrLVk.js";s.init();const i=[];for(let e=0;e<6e3;e++)i.push(`${e}`);const p=()=>a`
    <div>
      ${i.map(e=>a`<bim-label>${e}</bim-label>`)}
    </div>
  `,t=document.body.querySelector("bim-grid");t.layouts={main:{template:"",elements:{}},app:{template:"",elements:{}}};const n={name:"Juan"},r=()=>a`<bim-text-input @input=${u=>{var o;const m=u.target;n.name=m.value,(o=t.updateComponent)==null||o.app.content({name:n.name})}} value=${n.name}></bim-text-input>`;t.layouts={main:{template:"",elements:{el:document.createElement("div")},guard:()=>!1},app:{template:`
      "input btn" auto
      "content content" auto
      "list list" 1fr
    `,elements:{input:l.create(r),btn:l.create(()=>a`<bim-button label="Click me" @click=${()=>{t.layouts.app.elements.list=p,delete t.layouts.app.elements.btn,t.layouts.app.template=`
            "input" auto
            "content" auto
            "list" 1fr
          `,t.requestUpdate()}}></bim-button>`),content:{template:e=>a`<bim-label>${e.name}</bim-label>`,initialState:n}}}};t.addEventListener("layoutchange",()=>{t.layout?alert(`Your have changed to "${t.layout}" layout!`):alert("Your have cleaned up your layout!")});const c=document.body.querySelector("bim-button");c.addEventListener("click",()=>{const{layout:e}=t;switch(e){case void 0:t.layout="main";break;case"main":t.layout="app";break;case"app":t.layout=void 0;break;default:console.log("No follow up action")}});
