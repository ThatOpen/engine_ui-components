import{b}from"./when-D9oPOCfO.js";import{M as m}from"./index-CICXNLO4.js";import{i as s}from"./custom-icons-BJvlg01G.js";m.init();m.addIconsCollection({circle:{body:'<circle fill="currentColor" cx="12" cy="12" r="10"/>'},...s});const l=document.getElementById("theme-toggle"),n=document.documentElement;l.addEventListener("click",()=>{const t=n.classList.contains("bim-ui-dark");n.classList.toggle("bim-ui-dark",!t),n.classList.toggle("bim-ui-light",t),l.icon=t?"solar:sun-bold":"solar:moon-bold"});const o=document.getElementById("btn-toggle");o.addEventListener("click",()=>{o.active=!o.active});const e=document.getElementById("btn-async");e.addEventListener("click",()=>{e.loading||(e.loading=!0,e.label="Processing…",setTimeout(()=>{e.loading=!1,e.label="Run process"},2500))});const a=document.getElementById("btn-dynamic-menu");let i=0;const d=()=>(i++,b`
    <bim-context-menu>
      <bim-label style="
        display: block;
        padding: 0.25rem 0.5rem 0.375rem;
        --bim-label--c: var(--bim-ui_bg-contrast-60);
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
        margin-bottom: 0.125rem;
      ">Render #${i}</bim-label>
      <bim-button label="Favourite" icon="solar:star-bold"></bim-button>
      <bim-button label="Bookmark" icon="solar:bookmark-bold"></bim-button>
      <bim-button label="Share" icon="solar:share-bold"></bim-button>
      <bim-button label="Delete" icon="solar:trash-bin-trash-bold"
        style="--bim-label--c: var(--bim-ui_danger-base); --bim-icon--c: var(--bim-ui_danger-base);">
      </bim-button>
    </bim-context-menu>
  `);a.contextMenuTemplate=d;const u=document.getElementById("btn-event"),r=document.getElementById("event-output");let c=0;u.addEventListener("click",()=>{c++,r.textContent=`click fired ×${c}`});const g=document.getElementById("btn-event-disabled"),v=document.getElementById("event-disabled-output");g.addEventListener("click",()=>{v.textContent="fired (unexpected!)"});const y=document.getElementById("btn-menuclose"),E=document.getElementById("menuclose-output");let p=0;y.addEventListener("menuclose",()=>{E.textContent=`closed ${++p} time(s)`});
