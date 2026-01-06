import{b as t}from"./lit-html-CgQwCkHV.js";import{M as c,C as n}from"./index-Dxq5IOpt.js";import"./ref-B0YVjWyu.js";c.init();const b=n.create(()=>t`
    <bim-panel-section label="Stateless Panel Section">
      <bim-color-input label="Color"></bim-color-input>
    </bim-panel-section>
  `),[s,o]=n.create(e=>{const{label:l,counter:a}=e,i=`This panel section has been updated ${a} ${a===1?"time":"times"}`;return t`
      <bim-panel-section label=${l}>
        <bim-label>${i}</bim-label>
      </bim-panel-section>
    `},{label:"Statefull Panel Section",counter:0}),m=n.create(()=>{let e=0;return t`
    <bim-panel label="My Panel">
      <bim-panel-section label="Update Functions">
        <bim-button @click=${()=>{e++,e>=5?o({label:"Powered Statefull Panel Section 💪",counter:e}):o({counter:e})}} label="Update Statefull Section"></bim-button>
      </bim-panel-section>
      ${b}
      ${s}
    </bim-panel>
  `});document.body.append(m);
