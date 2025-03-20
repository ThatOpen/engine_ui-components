import"./modulepreload-polyfill-B5Qt9EMX.js";import{M as c,C as t}from"./index-W5V5HNuJ.js";import"./state-DYefyXr3.js";import{x as n}from"./lit-html-paDGiEfB.js";import"./ref-CInB0H-f.js";c.init();const b=t.create(()=>n`
    <bim-panel-section label="Stateless Panel Section">
      <bim-color-input label="Color"></bim-color-input>
    </bim-panel-section>
  `),[s,o]=t.create(e=>{const{label:l,counter:a}=e,i=`This panel section has been updated ${a} ${a===1?"time":"times"}`;return n`
      <bim-panel-section label=${l}>
        <bim-label>${i}</bim-label>
      </bim-panel-section>
    `},{label:"Statefull Panel Section",counter:0}),m=t.create(()=>{let e=0;return n`
    <bim-panel label="My Panel">
      <bim-panel-section label="Update Functions">
        <bim-button @click=${()=>{e++,e>=5?o({label:"Powered Statefull Panel Section 💪",counter:e}):o({counter:e})}} label="Update Statefull Section"></bim-button>
      </bim-panel-section>
      ${b}
      ${s}
    </bim-panel>
  `});document.body.append(m);
