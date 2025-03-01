import"./modulepreload-polyfill-B5Qt9EMX.js";import{M as s,C as t,T as l,a as c}from"./index-BSjm71QS.js";import"./state-DYefyXr3.js";import{x as n}from"./lit-html-paDGiEfB.js";import"./ref-CInB0H-f.js";s.init();const a=t.create(()=>n`
    <bim-table expanded>
      <div slot="missing-data" style="display: flex; flex-direction: column; align-items: center; width: 8rem; margin: auto;">
        <bim-label>No data to display!</bim-label>
      </div>
    </bim-table> 
  `);a.data=[{data:{Name:"Juan Hoyos",Age:28,Job:"BIM Software Developer",Company:"That Open Company",Bio:"Juan is a very cool guy, writing this tutorial so you know how to use a really powerful table in your projects"},children:[{data:{Name:"Maria Lopez",Age:24,Job:"Junior BIM Specialist",Company:"That Open Company",Bio:"Maria assists Juan in developing BIM solutions and learning the ropes of software development."}},{data:{Name:"Ana Garcia",Age:32,Job:"Structural Engineer",Company:"Skyline Structures",Bio:"Ana is a meticulous engineer with a knack for ensuring that every project is structurally sound."},children:[{data:{Name:"Luis Herrera",Age:27,Job:"BIM Software Developer",Company:"Skyline Structures",Bio:"Luis is Ana's right hand, assisting in design calculations and learning advanced structural modeling."}}]}]},{data:{Name:"Antonio Viegas",Age:30,Job:"BIM Software Developer",Company:"That Open Company",Bio:"Antonio is the CEO of That Open Company. He is the author of @thatopen/fragments."},children:[{data:{Name:"Sara Jimenez",Age:30,Job:"Assistant Project Manager",Company:"BuildSmart Ltd.",Bio:"Sara supports Carlos in project planning, client coordination, and schedule management."}},{data:{Name:"Tomas Rivera",Age:33,Job:"Site Supervisor",Company:"BuildSmart Ltd.",Bio:"Tomas ensures that project sites run smoothly, handling logistics and on-site team coordination."}}]}];const i=t.create(()=>n`
   <bim-text-input @input=${o=>{const e=o.target;e instanceof l&&(a.queryString=e.value)}} placeholder="Search..." debounce=250></bim-text-input> 
  `),u=t.create(()=>n`
   <bim-checkbox @change=${o=>{const e=o.target;e instanceof c&&(a.preserveStructureOnFilter=e.checked)}} label="Preserve Structure"></bim-checkbox> 
  `),p=t.create(()=>n`
    <div style="display: flex; gap: 0.5rem">
      <bim-button @click=${()=>{const e="Job?Manager";a.queryString=e,i.value=e}} label="Managers"></bim-button> 
      <bim-button @click=${()=>{const e="Job?Developer";a.queryString=e,i.value=e}} label="Developers"></bim-button> 
    </div>
  `),m=t.create(()=>n`
    <div style="display: flex; flex-direction: column; gap: 0.75rem; height: 100%;">
      <div style="display: flex; gap: 0.75rem;">
        ${i}
        ${p}
        ${u}
      </div>
      ${a}
    </div>
  `);document.body.append(m);
