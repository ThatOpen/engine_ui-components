import"./lit-html-Cs86_c16.js";import{a0 as B,a1 as a,k as s,H as k,z as H,T as J,C as L}from"./template-DD9ofnYC.js";import{e as D}from"./ref-Dfje1KsO.js";const M=l=>{const{components:y,topic:e,value:n,onCancel:_,onSubmit:F,styles:d}=l,g=F??(()=>{}),r=y.get(B),j=(n==null?void 0:n.title)??(e==null?void 0:e.title)??a.default.title,m=(n==null?void 0:n.status)??(e==null?void 0:e.status)??a.default.status,b=(n==null?void 0:n.type)??(e==null?void 0:e.type)??a.default.type,p=(n==null?void 0:n.priority)??(e==null?void 0:e.priority)??a.default.priority,u=(n==null?void 0:n.assignedTo)??(e==null?void 0:e.assignedTo)??a.default.assignedTo,c=(n==null?void 0:n.labels)??(e==null?void 0:e.labels)??a.default.labels,f=(n==null?void 0:n.stage)??(e==null?void 0:e.stage)??a.default.stage,z=(n==null?void 0:n.description)??(e==null?void 0:e.description)??a.default.description,C=e!=null&&e.dueDate?e.dueDate.toISOString().split("T")[0]:null,$=new Set([...r.config.statuses]);m&&$.add(m);const T=new Set([...r.config.types]);b&&T.add(b);const w=new Set([...r.config.priorities]);p&&w.add(p);const h=new Set([...r.config.users]);u&&h.add(u);const S=new Set([...r.config.labels]);if(c)for(const t of c)S.add(t);const v=new Set([...r.config.stages]);f&&v.add(f);const x=D(),O=async()=>{const{value:t}=x;if(!t)return;Object.values(t.valueTransform).length===0&&(t.valueTransform={dueDate:i=>{if(typeof i=="string"&&i.trim()!=="")return new Date(i)},status:i=>{if(Array.isArray(i)&&i.length!==0)return i[0]},type:i=>{if(Array.isArray(i)&&i.length!==0)return i[0]},priority:i=>{if(Array.isArray(i)&&i.length!==0)return i[0]},assignedTo:i=>{if(Array.isArray(i)&&i.length!==0)return i[0]}});const o=t.value;if(e)e.set(o),await g(e);else{const i=r.create(o);await g(i)}},A=D(),K=t=>{const{value:o}=A;if(!o)return;const i=t.target;o.disabled=i.value.trim()===""};return s`
    <bim-panel style="border-radius: var(--bim-ui_size-base); outline: 2px solid var(--bim-ui_bg-contrast-20); width: 22rem;">
      <bim-panel-section ${k(x)} fixed label="New Topic" name="topic">
        <div style="display: flex; gap: 0.375rem">
          <bim-text-input @input=${K} vertical label="Title" name="title" .value=${j}></bim-text-input>
          ${e?s`
              <bim-dropdown vertical label="Status" name="status" required>
                ${[...$].map(t=>s`<bim-option label=${t} .checked=${m===t}></bim-option>`)}
              </bim-dropdown>`:s``}
        </div>
        <div style="display: flex; gap: 0.375rem">
          <bim-dropdown vertical label="Type" name="type" required>
            ${[...T].map(t=>s`<bim-option label=${t} .checked=${b===t}></bim-option>`)}
          </bim-dropdown>
          <bim-dropdown vertical label="Priority" name="priority">
            ${[...w].map(t=>s`<bim-option label=${t} .checked=${p===t}></bim-option>`)}
          </bim-dropdown>
        </div>
        <div style="display: flex; gap: 0.375rem">
          <bim-dropdown vertical label="Labels" name="labels" multiple>
            ${[...S].map(t=>s`<bim-option label=${t} .checked=${c?[...c].includes(t):!1}></bim-option>`)}
          </bim-dropdown>
          <bim-dropdown vertical label="Assignee" name="assignedTo">
            ${[...h].map(t=>{const o=d!=null&&d.users?d.users[t]:null,i=o?o.name:t,q=o==null?void 0:o.picture;return s`<bim-option label=${i} value=${t} .img=${q} .checked=${u===t}></bim-option>`})}
          </bim-dropdown>
        </div>
        <div style="display: flex; gap: 0.375rem">
          <bim-text-input vertical type="date" label="Due Date" name="dueDate" .value=${C}></bim-text-input> 
          <bim-dropdown vertical label="Stage" name="stage">
            ${[...v].map(t=>s`<bim-option label=${t} .checked=${f===t}></bim-option>`)}
          </bim-dropdown>
        </div>
        <bim-text-input vertical label="Description" name="description" type="area" .value=${z??null}></bim-text-input>
        <div style="justify-content: right; display: flex; gap: 0.375rem">
          <style>
            #A7T9K {
              background-color: transparent;
            }

            #A7T9K:hover {
              --bim-label--c: #FF5252;
            }

            #W3F2J:hover {
              background-color: #329936;
            }
          </style>
          <bim-button @click=${_} style="flex: 0" id="A7T9K" label="Cancel"></bim-button>
          <bim-button ${k(A)} @click=${O} style="flex: 0" id="W3F2J" label=${e?"Update Topic":"Add Topic"} icon=${e?"tabler:refresh":"mi:add"}></bim-button>
        </div>
      </bim-panel-section>
    </bim-panel>
  `},P=l=>H.create(M,l),W=Object.freeze(Object.defineProperty({__proto__:null,createTopic:P},Symbol.toStringTag,{value:"Module"})),I={...W};J.init();const N=new L,[R]=I.createTopic({components:N,onSubmit:l=>console.log(l)});document.body.append(R);
