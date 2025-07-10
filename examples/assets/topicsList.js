import"./lit-html-Cs86_c16.js";import{d as z,T as C,a as S,m as o,e as X,L as be,R as I,Q as M,f as Z,V as ee,C as ue,W as fe,S as ye,b as ge,c as $e,G as we,F as ve,I as he}from"./index-BgQRAdOj.js";import"./index-VwooTTqL.js";import{c as Te,d as D,b as U,a as V,t as ke,v as xe,e as Se}from"./index-E2Xb6mG8.js";import{e as Y}from"./ref-DXXV_dKT.js";const Ie={dueDate:e=>{if(typeof e=="string"&&e.trim()!=="")return new Date(e)},status:e=>{if(Array.isArray(e)&&e.length!==0)return e[0]},type:e=>{if(Array.isArray(e)&&e.length!==0)return e[0]},priority:e=>{if(Array.isArray(e)&&e.length!==0)return e[0]},stage:e=>{if(Array.isArray(e)&&e.length!==0)return e[0]},assignedTo:e=>{if(Array.isArray(e)&&e.length!==0)return e[0]},labels:e=>{if(Array.isArray(e))return new Set(e)}},te=e=>{const{components:l,topic:t,value:i,onCancel:n,onSubmit:s,styles:r}=e,m=s??(()=>{}),d=l.get(z),v=(i==null?void 0:i.title)??(t==null?void 0:t.title)??C.default.title,p=(i==null?void 0:i.status)??(t==null?void 0:t.status)??C.default.status,b=(i==null?void 0:i.type)??(t==null?void 0:t.type)??C.default.type,a=(i==null?void 0:i.priority)??(t==null?void 0:t.priority)??C.default.priority,y=(i==null?void 0:i.assignedTo)??(t==null?void 0:t.assignedTo)??C.default.assignedTo,u=(i==null?void 0:i.labels)??(t==null?void 0:t.labels)??C.default.labels,g=(i==null?void 0:i.stage)??(t==null?void 0:t.stage)??C.default.stage,k=(i==null?void 0:i.description)??(t==null?void 0:t.description)??C.default.description,$=t!=null&&t.dueDate?t.dueDate.toISOString().split("T")[0]:null,f=new Set([...d.config.statuses]);p&&f.add(p);const h=new Set([...d.config.types]);b&&h.add(b);const w=new Set([...d.config.priorities]);a&&w.add(a);const j=new Set([...d.config.users]);y&&j.add(y);const G=new Set([...d.config.labels]);if(u)for(const c of u)G.add(c);const Q=new Set([...d.config.stages]);g&&Q.add(g);const H=Y(),me=async()=>{const{value:c}=H;if(!c)return;const x=be(c,Ie);if(t)t.set(x),await m(t);else{const L=d.create(x);await m(L)}},J=Y(),de=c=>{const{value:x}=J;if(!x)return;const L=c.target;x.disabled=L.value.trim()===""},N=`btn-${S.newRandomId()}`,O=`btn-${S.newRandomId()}`;return o`
    <div ${X(H)} style="display: flex; flex-direction: column; gap: 0.75rem;">
      <div style="display: flex; gap: 0.375rem">
        <bim-text-input @input=${de} vertical label="Title" name="title" .value=${v}></bim-text-input>
        ${t?o`
            <bim-dropdown vertical label="Status" name="status" required>
              ${[...f].map(c=>o`<bim-option label=${c} .checked=${p===c}></bim-option>`)}
            </bim-dropdown>`:o``}
      </div>
      <div style="display: flex; gap: 0.375rem">
        <bim-dropdown vertical label="Type" name="type" required>
          ${[...h].map(c=>o`<bim-option label=${c} .checked=${b===c}></bim-option>`)}
        </bim-dropdown>
        <bim-dropdown vertical label="Priority" name="priority">
          ${[...w].map(c=>o`<bim-option label=${c} .checked=${a===c}></bim-option>`)}
        </bim-dropdown>
      </div>
      <div style="display: flex; gap: 0.375rem">
        <bim-dropdown vertical label="Labels" name="labels" multiple>
          ${[...G].map(c=>o`<bim-option label=${c} .checked=${u?[...u].includes(c):!1}></bim-option>`)}
        </bim-dropdown>
        <bim-dropdown vertical label="Assignee" name="assignedTo">
          ${[...j].map(c=>{const x=r!=null&&r.users?r.users[c]:null,L=x?x.name:c,pe=x==null?void 0:x.picture;return o`<bim-option label=${L} value=${c} .img=${pe} .checked=${y===c}></bim-option>`})}
        </bim-dropdown>
      </div>
      <div style="display: flex; gap: 0.375rem">
        <bim-text-input vertical type="date" label="Due Date" name="dueDate" .value=${$}></bim-text-input> 
        <bim-dropdown vertical label="Stage" name="stage">
          ${[...Q].map(c=>o`<bim-option label=${c} .checked=${g===c}></bim-option>`)}
        </bim-dropdown>
      </div>
      <bim-text-input vertical label="Description" name="description" type="area" .value=${k??null}></bim-text-input>
      <div style="justify-content: right; display: flex; gap: 0.375rem">
        <style>
          #${O} {
            background-color: transparent;
          }

          #${O}:hover {
            --bim-label--c: #FF5252;
          }

          #${N}:hover {
            background-color: #329936;
          }
        </style>
        <bim-button id=${O} style="flex: 0" @click=${n} label="Cancel"></bim-button>
        <bim-button id=${N} style="flex: 0" @click=${me} ${X(J)} label=${t?"Update Topic":"Add Topic"} icon=${t?"tabler:refresh":"mi:add"}></bim-button>
      </div>
    </div>
  `},ne=(e,l)=>{const{showInput:t,topic:i,styles:n}=e,s={add:!0,delete:!0,...e.actions},r=`input-${S.newRandomId()}`,m=`btn-${S.newRandomId()}`,d=`btn-${S.newRandomId()}`,v=()=>document.getElementById(m),p=()=>document.getElementById(r),b=()=>{const w=p();return w?w.value.trim().length>0:!1},a=()=>{l({showInput:!0})},y=()=>{const w=p(),j=b();w&&j&&(i.createComment(w.value),l({showInput:!1}))},u=()=>{l({showInput:!1})},g=()=>{const w=v();if(!w)return;if(!p()){w.disabled=!0;return}w.disabled=!b()},k=o`
    ${s.add?o`<bim-button @click=${a} label="Add Comment" icon="majesticons:comment-line"></bim-button>`:null}
  `,f=o`
    <bim-text-input id=${r} @input=${g} @keypress=${w=>{w.code==="Enter"&&w.ctrlKey&&y()}} type="area"></bim-text-input>

    <div style="justify-content: right; display: flex; gap: 0.375rem">
      <style>
        #${m} {
          background-color: #329936;
        }  

        #${d} {
          background-color: transparent;
        }

        #${d}:hover {
          --bim-label--c: #FF5252;
        }
      </style>

      <bim-button style="flex: 0" id=${d} @click=${u} label="Cancel"></bim-button>
      <bim-button style="flex: 0" id=${m} @click=${y} label="Accept" icon="material-symbols:check" disabled></bim-button>
    </div>
  `,[h]=Te({topic:i,actions:s,styles:n??D.users});return o`
    <div style="display: flex; flex-direction: column; gap: 0.5rem">
      ${h}
      ${t?f:k}
    </div>
  `},Ae=e=>I.create(ne,e),Ce=Object.freeze(Object.defineProperty({__proto__:null,topicComments:Ae,topicCommentsSectionTemplate:ne},Symbol.toStringTag,{value:"Module"})),ie=(e,l)=>{const{components:t,editing:i,topic:n,styles:s}=e,r={update:!0,...e.actions},m=(s==null?void 0:s.priorities)??D.priorities,d=(s==null?void 0:s.statuses)??D.statuses,v=(s==null?void 0:s.types)??D.types;let p;n!=null&&n.priority&&(p=m[n.priority]);let b;n!=null&&n.type&&(b=v[n.type]);let a;n!=null&&n.type&&(a=d[n.status]);let y,u;return i?y=te({components:t,topic:n,styles:s,onSubmit:()=>{l({editing:!1})},onCancel:()=>{l({editing:!1})}}):u=o`
      <div>
        <bim-label>Title</bim-label>
        <bim-label style="--bim-label--c: var(--bim-ui_bg-contrast-100)">${n.title}</bim-label>
      </div>

      ${n.description?o`
            <div>
              <bim-label>Description</bim-label>
              <bim-label style="--bim-label--c: var(--bim-ui_bg-contrast-100); white-space: normal">${n.description}</bim-label>
            </div>
          `:null}

      <div style="display: flex; gap: 0.375rem">
        <bim-label>Status</bim-label>
        <bim-label .icon=${a==null?void 0:a.icon} style=${M({...U,...a==null?void 0:a.style})}
        >${n.status}
        </bim-label>
      </div>

      <div style="display: flex; gap: 0.375rem">
        <bim-label>Type</bim-label>
        <bim-label .icon=${b==null?void 0:b.icon} style=${M({...U,...b==null?void 0:b.style})}
        >${n.type}
        </bim-label>
      </div>

      ${n.priority?o`
            <div style="display: flex; gap: 0.375rem">
              <bim-label>Priority</bim-label>
              <bim-label .icon=${p==null?void 0:p.icon} style=${M({...U,...p==null?void 0:p.style})}
              >${n.priority}
              </bim-label>
            </div>`:null}

      <div style="display: flex; gap: 0.375rem">
        <bim-label>Author</bim-label>
        ${V(n.creationAuthor,(s==null?void 0:s.users)??D.users)}
      </div>

      ${n.assignedTo?o`
          <div style="display: flex; gap: 0.375rem">
            <bim-label>Assignee</bim-label>
            ${V(n.assignedTo,(s==null?void 0:s.users)??D.users)}
          </div>`:null}

      ${n.dueDate?o`
          <div style="display: flex; gap: 0.375rem">
            <bim-label>Due Date</bim-label>
            <bim-label style="--bim-label--c: var(--bim-ui_bg-contrast-100)">${n.dueDate.toDateString()}</bim-label>
          </div>`:null}

      ${n.modifiedAuthor?o`
          <div style="display: flex; gap: 0.375rem">
            <bim-label>Modified By</bim-label>
            ${V(n.modifiedAuthor,(s==null?void 0:s.users)??D.users)}
          </div>`:null}

      ${n.modifiedDate?o`
            <div style="display: flex; gap: 0.375rem">
              <bim-label>Modified Date</bim-label>
              <bim-label style="--bim-label--c: var(--bim-ui_bg-contrast-100)">${n.modifiedDate.toDateString()}</bim-label>
            </div>`:null}

      ${n.labels.size!==0?o`
          <div style="display: flex; gap: 0.375rem">
            <bim-label>Labels</bim-label>
            <bim-label style="white-space: normal; --bim-label--c: var(--bim-ui_bg-contrast-100)">${[...n.labels].join(", ")}</bim-label>
          </div>`:null}

      ${r.update?o`
              <bim-button @click=${()=>l({editing:!0})} label="Update Information" icon="tabler:refresh"></bim-button> 
            `:null}
    `,o`
    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
      ${i?y:u}
    </div>
  `},De=e=>I.create(ie,e),_e=Object.freeze(Object.defineProperty({__proto__:null,topicInformation:De,topicInformationSectionTemplate:ie},Symbol.toStringTag,{value:"Module"})),oe=(e,l)=>{const{components:t,topic:i,linking:n}=e,s=t.get(z),r={link:!0,...e.actions},[m,d]=ke({components:t,topics:[...i.relatedTopics].map(a=>s.list.get(a)).map(a=>a)});m.headersHidden=!0,m.hiddenColumns=["Guid","Status","Description","Author","Assignee","Date","DueDate","Type","Priority"];const v=()=>o`
      <bim-text-input placeholder="Search..." debounce="100" @input=${y=>{const u=y.target;u instanceof Z&&(m.queryString=u.value)}}></bim-text-input> 
    `;let p,b;if(n){m.selectableRows=!0,d({topics:void 0});const a=m.data.filter($=>{const{Guid:f}=$.data;return typeof f!="string"?!1:i.relatedTopics.has(f)}).map($=>$.data);m.selection=new Set(a);const y=()=>{const $=[...m.selection].map(({Guid:f})=>typeof f!="string"?null:s.list.has(f)?f:null).map(f=>f);i.relatedTopics.clear(),i.relatedTopics.add(...$),l({linking:!1})},u=()=>{l({linking:!1})},g=`btn-${S.newRandomId()}`,k=`btn-${S.newRandomId()}`;p=o`
      <div style="display: flex; gap: 0.25rem">
        <style>
          #${g}:hover {
            background-color: #329936;
          }  

          #${k} {
            background-color: transparent;
          }

          #${k}:hover {
            --bim-label--c: #FF5252;
          }
        </style>
        ${v()}
        <div style="display: flex; justify-content: right; gap: 0.25rem">
          <bim-button id=${k} @click=${u} style="flex: 0" label="Cancel" icon="material-symbols:close"></bim-button>
          <bim-button id=${g} @click=${y} style="flex: 0" label="Accept" icon="material-symbols:check"></bim-button>
        </div>
      </div> 
    `}else{m.selectableRows=!1;const a=()=>{l({linking:!0})};b=o`
      <div style="display: flex; justify-content: right; gap: 0.25rem">
        ${v()}
        ${r.link?o`<bim-button style="flex: 0" @click=${a} icon="tabler:link"></bim-button>`:null}
      </div> 
    `}return o`
    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
      ${b}
      ${p}
      ${m}
    </div> 
  `},je=e=>I.create(oe,e),Le=Object.freeze(Object.defineProperty({__proto__:null,topicRelations:je,topicRelationsSectionTemplate:oe},Symbol.toStringTag,{value:"Module"})),le=(e,l)=>{const{components:t,topic:i,world:n,linking:s}=e,r={add:!0,link:!0,selectComponents:!0,colorizeComponent:!0,resetColors:!0,updateCamera:!0,delete:!0,unlink:!0,...e.actions},m=t.get(ee),[d,v]=xe({components:t,topic:i,actions:r}),p=()=>o`
      <bim-text-input placeholder="Search..." debounce="100" @input=${u=>{const g=u.target;g instanceof Z&&(d.queryString=g.value)}}></bim-text-input> 
    `;let b,a;if(s){d.selectableRows=!0,v({topic:void 0,actions:{delete:!1,updateCamera:!1,colorizeComponent:!1,resetColors:!1}});const y=d.data.filter(f=>{const{Guid:h}=f.data;return typeof h!="string"?!1:i.viewpoints.has(h)}).map(f=>f.data);d.selection=new Set(y);const u=()=>{const f=[...d.selection].map(({Guid:h})=>typeof h!="string"?null:m.list.has(h)?h:null).map(h=>h);i.viewpoints.clear(),i.viewpoints.add(...f),l({linking:!1})},g=()=>{l({linking:!1})},k=`btn-${S.newRandomId()}`,$=`btn-${S.newRandomId()}`;b=o`
      <div style="display: flex; gap: 0.25rem">
        <style>
          #${k}:hover {
            background-color: #329936;
          }  

          #${$} {
            background-color: transparent;
          }

          #${$}:hover {
            --bim-label--c: #FF5252;
          }
        </style>
        ${p()}
        <div style="display: flex; justify-content: right; gap: 0.25rem">
          <bim-button id=${$} @click=${g} style="flex: 0" label="Cancel" icon="material-symbols:close"></bim-button>
          <bim-button id=${k} @click=${u} style="flex: 0" label="Accept" icon="material-symbols:check"></bim-button>
        </div>
      </div> 
    `}else{d.selectableRows=!1,v({topic:i,actions:r});const y=()=>{if(!(i&&r.add&&!s))return;const $=m.create();n&&($.world=n),i.viewpoints.add($.guid)},u=()=>{l({linking:!0})},g=o`<bim-button style="flex: 0" @click=${y} .disabled=${!n} icon="mi:add"></bim-button>`,k=o`<bim-button style="flex: 0" @click=${u} icon="tabler:link"></bim-button>`;a=o`
      <div style="display: flex; justify-content: right; gap: 0.25rem">
        ${p()}
        <div style="display: flex; justify-content: right; gap: 0.25rem">
          ${r.add?g:null}
          ${r.link?k:null}
        </div>
      </div> 
    `}return o`
    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
      ${a}
      ${b}
      ${d}
    </div> 
  `},Be=e=>I.create(le,e),Re=Object.freeze(Object.defineProperty({__proto__:null,topicViewpoints:Be,topicViewpointsSectionTemplate:le},Symbol.toStringTag,{value:"Module"})),R={...Ce,..._e,...Le,...Re},Pe=e=>o`
    <bim-panel-section fixed label="New Topic" name="topic">
      ${te(e)}
    </bim-panel-section>
  `,Fe=e=>I.create(Pe,e),Ee=Object.freeze(Object.defineProperty({__proto__:null,topic:Fe},Symbol.toStringTag,{value:"Module"})),Oe={...Ee};S.init();const q=document.createElement("bim-viewport"),T=new ue,Me=T.get(fe),A=Me.create(),se=new ye(T);se.setup();A.scene=se;const ae=new ge(T,q);A.renderer=ae;const K=new $e(T);A.camera=K;K.controls.setLookAt(10,5.5,5,-4,-1,-6.5);q.addEventListener("resize",()=>{ae.resize(),K.updateAspect()});T.init();const Ue=T.get(we);Ue.create(A);const P=T.get(ve);P.init("https://thatopen.github.io/engine_fragment/resources/worker.mjs");A.camera.controls.addEventListener("rest",()=>P.core.update(!0));P.list.onItemSet.add(async({value:e})=>{e.useCamera(A.camera.three),A.scene.three.add(e.object),await P.core.update(!0)});const re=T.get(he);await re.setup({autoSetWasm:!1,wasm:{path:"https://unpkg.com/web-ifc@0.0.69/",absolute:!0}});const Ve=await fetch("https://thatopen.github.io/engine_ui-components/resources/small.ifc"),ze=await Ve.arrayBuffer(),qe=new Uint8Array(ze);await re.load(qe,!0,"small");const E={"jhon.doe@example.com":{name:"Jhon Doe",picture:"https://www.profilebakery.com/wp-content/uploads/2023/04/Profile-Image-AI.jpg"},"user_a@something.com":{name:"User A",picture:"https://www.profilebakery.com/wp-content/uploads/2023/04/Portrait-Photography.jpg"},"user_b@something.com":{name:"User B",picture:"https://www.profilebakery.com/wp-content/uploads/2023/04/AI-Portrait.jpg"}},_=T.get(z);_.setup({users:new Set(Object.keys(E)),labels:new Set(["Architecture","Structure","MEP"])});const Ke=T.get(ee);_.list.onItemSet.add(({value:e})=>{const l=Ke.create();l.world=A,e.viewpoints.add(l.guid)});const[B]=Se.topicsList({components:T,dataStyles:{users:E}});B.selectableRows=!0;const[We,Ge]=Oe.topic({components:T,styles:{users:E}}),F=I.create(()=>o`
    <dialog class="form-dialog">
     <bim-panel style="border-radius: var(--bim-ui_size-base); width: 22rem;">
      ${We}
     </bim-panel> 
    </dialog>
  `);document.body.append(F);const Qe=I.create(()=>o`
    <bim-button style="flex: 0" @click=${()=>{F.showModal()}} label="Create Topic" icon="material-symbols:task"></bim-button>
  `);Ge({onCancel:()=>{F.close()},onSubmit:()=>{F.close()}});const[He,ce]=I.create(e=>{const{components:l,topic:t,world:i,actions:n,styles:s}=e;let r,m;if(t){const[d]=R.topicInformation({components:l,topic:t,actions:n==null?void 0:n.information,styles:s}),[v]=R.topicViewpoints({components:l,topic:t,world:i,actions:n==null?void 0:n.viewpoints}),[p]=R.topicRelations({components:l,topic:t,actions:n==null?void 0:n.relatedTopics}),[b]=R.topicComments({topic:t,actions:n==null?void 0:n.comments,styles:s==null?void 0:s.users}),a=()=>{window.alert(`An email will be sent to ${t.assignedTo}! (obviosuly not, this is just for demo purposes)`)};r=o`
        <bim-panel-section label="Information" icon="ph:info-bold">
          ${d}
        </bim-panel-section>
        <bim-panel-section label="Comments" icon="majesticons:comment-line">
          ${b}
        </bim-panel-section>
        <bim-panel-section label="Viewpoints" icon="tabler:camera">
          ${v}
        </bim-panel-section>
        <bim-panel-section label="Related Topics" icon="tabler:link">
          ${p}
        </bim-panel-section>
        <!-- This is a custom section where you can add any functionality you like -->
        <bim-panel-section label="Communication" icon="tabler:link">
          ${t.assignedTo?o`
                <bim-button @click=${a} label="Send Mail Reminder" icon="mingcute:send-fill"></bim-button> 
              `:o`
                <bim-label style="white-space: normal">The topic must have an assignee to use the communication tools. Update the topic with a new assignee!</bim-label>
              `}
        </bim-panel-section>
      `}else m=o`
        <bim-panel-section label="Missing Topic" icon="material-symbols:chat-error">
          ${t?null:o`<bim-label>There is no topic to display in this panel!</bim-label>`}
        </bim-panel-section> 
      `;return o`
      <bim-panel>
        ${m}
        ${r}
      </bim-panel> 
    `},{components:T,world:A,styles:{users:E}});_.list.onItemUpdated.add(()=>ce());B.addEventListener("rowcreated",e=>{const{row:l}=e.detail;l.addEventListener("click",()=>{const{Guid:t}=l.data;if(!t)return;const i=_.list.get(t);i&&ce({topic:i})}),l.style.cursor="pointer",l.addEventListener("mouseover",()=>{l.style.backgroundColor=`color-mix(
        in lab,
        var(--bim-ui_bg-contrast-20) 30%,
        var(--bim-ui_main-base) 10%
      )`}),l.addEventListener("mouseout",()=>{l.style.removeProperty("background-color")})});const Je=I.create(()=>o`<bim-button style="flex: 0" @click=${async()=>{const l=[...B.selection].map(({Guid:r})=>r&&typeof r=="string"?_.list.get(r):null).filter(r=>r),t=l.length>0?l:[..._.list.values()];if(t.length===0)return;const i=await _.export(t),n=new File([i],"topics.bcf"),s=document.createElement("a");s.href=URL.createObjectURL(n),s.download=n.name,s.click(),URL.revokeObjectURL(s.href)}} label="Download BCF" icon="material-symbols:download"></bim-button> `),Ne=I.create(()=>o`
    <bim-panel>
      <bim-panel-section label="BCF" fixed>
        <div style="display: flex; justify-content: space-between; gap: 0.5rem">
          <bim-text-input style="flex-grow: 0; flex-basis: 15rem" @input=${l=>{const t=l.target;B.queryString=t.value}} placeholder="Search a topic..." debounce="100"></bim-text-input>
          <div style="display: flex; gap: 0.5rem">
            ${Qe}
            ${Je}
          </div> 
        </div> 
        ${B}
      </bim-panel-section>
    </bim-panel>
  `),W=document.createElement("bim-grid");W.layouts={main:{template:`
    "customTopicPanel viewport"
    "customTopicPanel bcfPanel" 25rem
    /24rem 1fr
    `,elements:{bcfPanel:Ne,viewport:q,customTopicPanel:He}}};W.layout="main";document.body.append(W);
