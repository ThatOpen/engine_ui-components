import"./lit-html-BUQgm8fs.js";import{c as V,T as C,l as S,N as Q,m as l,z as de,R as A,d as E,e as Y,V as Z,C as be,W as ue,S as fe,a as ye,b as ge,G as $e,F as we}from"./index-DMl8TH7x.js";import"./index-DezEuobz.js";import{c as ve,d as D,a as z,b as M,t as he,v as Te,e as ke}from"./index-CVqmvCLw.js";import{e as X}from"./ref-CLKbrLVk.js";const xe={dueDate:e=>{if(typeof e=="string"&&e.trim()!=="")return new Date(e)},status:e=>{if(Array.isArray(e)&&e.length!==0)return e[0]},type:e=>{if(Array.isArray(e)&&e.length!==0)return e[0]},priority:e=>{if(Array.isArray(e)&&e.length!==0)return e[0]},stage:e=>{if(Array.isArray(e)&&e.length!==0)return e[0]},assignedTo:e=>{if(Array.isArray(e)&&e.length!==0)return e[0]},labels:e=>{if(Array.isArray(e))return new Set(e)}},ee=e=>{const{components:o,topic:t,value:i,onCancel:n,onSubmit:s,styles:r}=e,m=s??(()=>{}),p=o.get(V),v=(i==null?void 0:i.title)??(t==null?void 0:t.title)??C.default.title,d=(i==null?void 0:i.status)??(t==null?void 0:t.status)??C.default.status,b=(i==null?void 0:i.type)??(t==null?void 0:t.type)??C.default.type,a=(i==null?void 0:i.priority)??(t==null?void 0:t.priority)??C.default.priority,y=(i==null?void 0:i.assignedTo)??(t==null?void 0:t.assignedTo)??C.default.assignedTo,u=(i==null?void 0:i.labels)??(t==null?void 0:t.labels)??C.default.labels,g=(i==null?void 0:i.stage)??(t==null?void 0:t.stage)??C.default.stage,T=(i==null?void 0:i.description)??(t==null?void 0:t.description)??C.default.description,$=t!=null&&t.dueDate?t.dueDate.toISOString().split("T")[0]:null,f=new Set([...p.config.statuses]);d&&f.add(d);const h=new Set([...p.config.types]);b&&h.add(b);const w=new Set([...p.config.priorities]);a&&w.add(a);const j=new Set([...p.config.users]);y&&j.add(y);const N=new Set([...p.config.labels]);if(u)for(const c of u)N.add(c);const G=new Set([...p.config.stages]);g&&G.add(g);const W=X(),ce=async()=>{const{value:c}=W;if(!c)return;const x=de(c,xe);if(t)t.set(x),await m(t);else{const R=p.create(x);await m(R)}},H=X(),me=c=>{const{value:x}=H;if(!x)return;const R=c.target;x.disabled=R.value.trim()===""},J=`btn-${S.newRandomId()}`,O=`btn-${S.newRandomId()}`;return l`
    <div ${Q(W)} style="display: flex; flex-direction: column; gap: 0.75rem;">
      <div style="display: flex; gap: 0.375rem">
        <bim-text-input @input=${me} vertical label="Title" name="title" .value=${v}></bim-text-input>
        ${t?l`
            <bim-dropdown vertical label="Status" name="status" required>
              ${[...f].map(c=>l`<bim-option label=${c} .checked=${d===c}></bim-option>`)}
            </bim-dropdown>`:l``}
      </div>
      <div style="display: flex; gap: 0.375rem">
        <bim-dropdown vertical label="Type" name="type" required>
          ${[...h].map(c=>l`<bim-option label=${c} .checked=${b===c}></bim-option>`)}
        </bim-dropdown>
        <bim-dropdown vertical label="Priority" name="priority">
          ${[...w].map(c=>l`<bim-option label=${c} .checked=${a===c}></bim-option>`)}
        </bim-dropdown>
      </div>
      <div style="display: flex; gap: 0.375rem">
        <bim-dropdown vertical label="Labels" name="labels" multiple>
          ${[...N].map(c=>l`<bim-option label=${c} .checked=${u?[...u].includes(c):!1}></bim-option>`)}
        </bim-dropdown>
        <bim-dropdown vertical label="Assignee" name="assignedTo">
          ${[...j].map(c=>{const x=r!=null&&r.users?r.users[c]:null,R=x?x.name:c,pe=x==null?void 0:x.picture;return l`<bim-option label=${R} value=${c} .img=${pe} .checked=${y===c}></bim-option>`})}
        </bim-dropdown>
      </div>
      <div style="display: flex; gap: 0.375rem">
        <bim-text-input vertical type="date" label="Due Date" name="dueDate" .value=${$}></bim-text-input> 
        <bim-dropdown vertical label="Stage" name="stage">
          ${[...G].map(c=>l`<bim-option label=${c} .checked=${g===c}></bim-option>`)}
        </bim-dropdown>
      </div>
      <bim-text-input vertical label="Description" name="description" type="area" .value=${T??null}></bim-text-input>
      <div style="justify-content: right; display: flex; gap: 0.375rem">
        <style>
          #${O} {
            background-color: transparent;
          }

          #${O}:hover {
            --bim-label--c: #FF5252;
          }

          #${J}:hover {
            background-color: #329936;
          }
        </style>
        <bim-button id=${O} style="flex: 0" @click=${n} label="Cancel"></bim-button>
        <bim-button id=${J} style="flex: 0" @click=${ce} ${Q(H)} label=${t?"Update Topic":"Add Topic"} icon=${t?"tabler:refresh":"mi:add"}></bim-button>
      </div>
    </div>
  `},te=(e,o)=>{const{showInput:t,topic:i,styles:n}=e,s={add:!0,delete:!0,...e.actions},r=`input-${S.newRandomId()}`,m=`btn-${S.newRandomId()}`,p=`btn-${S.newRandomId()}`,v=()=>document.getElementById(m),d=()=>document.getElementById(r),b=()=>{const w=d();return w?w.value.trim().length>0:!1},a=()=>{o({showInput:!0})},y=()=>{const w=d(),j=b();w&&j&&(i.createComment(w.value),o({showInput:!1}))},u=()=>{o({showInput:!1})},g=()=>{const w=v();if(!w)return;if(!d()){w.disabled=!0;return}w.disabled=!b()},T=l`
    ${s.add?l`<bim-button @click=${a} label="Add Comment" icon="majesticons:comment-line"></bim-button>`:null}
  `,f=l`
    <bim-text-input id=${r} @input=${g} @keypress=${w=>{w.code==="Enter"&&w.ctrlKey&&y()}} type="area"></bim-text-input>

    <div style="justify-content: right; display: flex; gap: 0.375rem">
      <style>
        #${m} {
          background-color: #329936;
        }  

        #${p} {
          background-color: transparent;
        }

        #${p}:hover {
          --bim-label--c: #FF5252;
        }
      </style>

      <bim-button style="flex: 0" id=${p} @click=${u} label="Cancel"></bim-button>
      <bim-button style="flex: 0" id=${m} @click=${y} label="Accept" icon="material-symbols:check" disabled></bim-button>
    </div>
  `,[h]=ve({topic:i,actions:s,styles:n??D.users});return l`
    <div style="display: flex; flex-direction: column; gap: 0.5rem">
      ${h}
      ${t?f:T}
    </div>
  `},Se=e=>A.create(te,e),Ie=Object.freeze(Object.defineProperty({__proto__:null,topicComments:Se,topicCommentsSectionTemplate:te},Symbol.toStringTag,{value:"Module"})),ne=(e,o)=>{const{components:t,editing:i,topic:n,styles:s}=e,r={update:!0,...e.actions},m=(s==null?void 0:s.priorities)??D.priorities,p=(s==null?void 0:s.statuses)??D.statuses,v=(s==null?void 0:s.types)??D.types;let d;n!=null&&n.priority&&(d=m[n.priority]);let b;n!=null&&n.type&&(b=v[n.type]);let a;n!=null&&n.type&&(a=p[n.status]);let y,u;return i?y=ee({components:t,topic:n,styles:s,onSubmit:()=>{o({editing:!1})},onCancel:()=>{o({editing:!1})}}):u=l`
      <div>
        <bim-label>Title</bim-label>
        <bim-label style="--bim-label--c: var(--bim-ui_bg-contrast-100)">${n.title}</bim-label>
      </div>

      ${n.description?l`
            <div>
              <bim-label>Description</bim-label>
              <bim-label style="--bim-label--c: var(--bim-ui_bg-contrast-100); white-space: normal">${n.description}</bim-label>
            </div>
          `:null}

      <div style="display: flex; gap: 0.375rem">
        <bim-label>Status</bim-label>
        <bim-label .icon=${a==null?void 0:a.icon} style=${E({...M,...a==null?void 0:a.style})}
        >${n.status}
        </bim-label>
      </div>

      <div style="display: flex; gap: 0.375rem">
        <bim-label>Type</bim-label>
        <bim-label .icon=${b==null?void 0:b.icon} style=${E({...M,...b==null?void 0:b.style})}
        >${n.type}
        </bim-label>
      </div>

      ${n.priority?l`
            <div style="display: flex; gap: 0.375rem">
              <bim-label>Priority</bim-label>
              <bim-label .icon=${d==null?void 0:d.icon} style=${E({...M,...d==null?void 0:d.style})}
              >${n.priority}
              </bim-label>
            </div>`:null}

      <div style="display: flex; gap: 0.375rem">
        <bim-label>Author</bim-label>
        ${z(n.creationAuthor,(s==null?void 0:s.users)??D.users)}
      </div>

      ${n.assignedTo?l`
          <div style="display: flex; gap: 0.375rem">
            <bim-label>Assignee</bim-label>
            ${z(n.assignedTo,(s==null?void 0:s.users)??D.users)}
          </div>`:null}

      ${n.dueDate?l`
          <div style="display: flex; gap: 0.375rem">
            <bim-label>Due Date</bim-label>
            <bim-label style="--bim-label--c: var(--bim-ui_bg-contrast-100)">${n.dueDate.toDateString()}</bim-label>
          </div>`:null}

      ${n.modifiedAuthor?l`
          <div style="display: flex; gap: 0.375rem">
            <bim-label>Modified By</bim-label>
            ${z(n.modifiedAuthor,(s==null?void 0:s.users)??D.users)}
          </div>`:null}

      ${n.modifiedDate?l`
            <div style="display: flex; gap: 0.375rem">
              <bim-label>Modified Date</bim-label>
              <bim-label style="--bim-label--c: var(--bim-ui_bg-contrast-100)">${n.modifiedDate.toDateString()}</bim-label>
            </div>`:null}

      ${n.labels.size!==0?l`
          <div style="display: flex; gap: 0.375rem">
            <bim-label>Labels</bim-label>
            <bim-label style="white-space: normal; --bim-label--c: var(--bim-ui_bg-contrast-100)">${[...n.labels].join(", ")}</bim-label>
          </div>`:null}

      ${r.update?l`
              <bim-button @click=${()=>o({editing:!0})} label="Update Information" icon="tabler:refresh"></bim-button> 
            `:null}
    `,l`
    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
      ${i?y:u}
    </div>
  `},Ae=e=>A.create(ne,e),Ce=Object.freeze(Object.defineProperty({__proto__:null,topicInformation:Ae,topicInformationSectionTemplate:ne},Symbol.toStringTag,{value:"Module"})),ie=(e,o)=>{const{components:t,topic:i,linking:n}=e,s=t.get(V),r={link:!0,...e.actions},[m,p]=he({components:t,topics:[...i.relatedTopics].map(a=>s.list.get(a)).map(a=>a)});m.headersHidden=!0,m.hiddenColumns=["Guid","Status","Description","Author","Assignee","Date","DueDate","Type","Priority"];const v=()=>l`
      <bim-text-input placeholder="Search..." debounce="100" @input=${y=>{const u=y.target;u instanceof Y&&(m.queryString=u.value)}}></bim-text-input> 
    `;let d,b;if(n){m.selectableRows=!0,p({topics:void 0});const a=m.data.filter($=>{const{Guid:f}=$.data;return typeof f!="string"?!1:i.relatedTopics.has(f)}).map($=>$.data);m.selection=new Set(a);const y=()=>{const $=[...m.selection].map(({Guid:f})=>typeof f!="string"?null:s.list.has(f)?f:null).map(f=>f);i.relatedTopics.clear(),i.relatedTopics.add(...$),o({linking:!1})},u=()=>{o({linking:!1})},g=`btn-${S.newRandomId()}`,T=`btn-${S.newRandomId()}`;d=l`
      <div style="display: flex; gap: 0.25rem">
        <style>
          #${g}:hover {
            background-color: #329936;
          }  

          #${T} {
            background-color: transparent;
          }

          #${T}:hover {
            --bim-label--c: #FF5252;
          }
        </style>
        ${v()}
        <div style="display: flex; justify-content: right; gap: 0.25rem">
          <bim-button id=${T} @click=${u} style="flex: 0" label="Cancel" icon="material-symbols:close"></bim-button>
          <bim-button id=${g} @click=${y} style="flex: 0" label="Accept" icon="material-symbols:check"></bim-button>
        </div>
      </div> 
    `}else{m.selectableRows=!1;const a=()=>{o({linking:!0})};b=l`
      <div style="display: flex; justify-content: right; gap: 0.25rem">
        ${v()}
        ${r.link?l`<bim-button style="flex: 0" @click=${a} icon="tabler:link"></bim-button>`:null}
      </div> 
    `}return l`
    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
      ${b}
      ${d}
      ${m}
    </div> 
  `},De=e=>A.create(ie,e),_e=Object.freeze(Object.defineProperty({__proto__:null,topicRelations:De,topicRelationsSectionTemplate:ie},Symbol.toStringTag,{value:"Module"})),oe=(e,o)=>{const{components:t,topic:i,world:n,linking:s}=e,r={add:!0,link:!0,selectComponents:!0,colorizeComponent:!0,resetColors:!0,updateCamera:!0,delete:!0,unlink:!0,...e.actions},m=t.get(Z),[p,v]=Te({components:t,topic:i,actions:r}),d=()=>l`
      <bim-text-input placeholder="Search..." debounce="100" @input=${u=>{const g=u.target;g instanceof Y&&(p.queryString=g.value)}}></bim-text-input> 
    `;let b,a;if(s){p.selectableRows=!0,v({topic:void 0,actions:{delete:!1,updateCamera:!1,colorizeComponent:!1,resetColors:!1}});const y=p.data.filter(f=>{const{Guid:h}=f.data;return typeof h!="string"?!1:i.viewpoints.has(h)}).map(f=>f.data);p.selection=new Set(y);const u=()=>{const f=[...p.selection].map(({Guid:h})=>typeof h!="string"?null:m.list.has(h)?h:null).map(h=>h);i.viewpoints.clear(),i.viewpoints.add(...f),o({linking:!1})},g=()=>{o({linking:!1})},T=`btn-${S.newRandomId()}`,$=`btn-${S.newRandomId()}`;b=l`
      <div style="display: flex; gap: 0.25rem">
        <style>
          #${T}:hover {
            background-color: #329936;
          }  

          #${$} {
            background-color: transparent;
          }

          #${$}:hover {
            --bim-label--c: #FF5252;
          }
        </style>
        ${d()}
        <div style="display: flex; justify-content: right; gap: 0.25rem">
          <bim-button id=${$} @click=${g} style="flex: 0" label="Cancel" icon="material-symbols:close"></bim-button>
          <bim-button id=${T} @click=${u} style="flex: 0" label="Accept" icon="material-symbols:check"></bim-button>
        </div>
      </div> 
    `}else{p.selectableRows=!1,v({topic:i,actions:r});const y=()=>{if(!(i&&r.add&&!s))return;const $=m.create();n&&($.world=n),i.viewpoints.add($.guid)},u=()=>{o({linking:!0})},g=l`<bim-button style="flex: 0" @click=${y} .disabled=${!n} icon="mi:add"></bim-button>`,T=l`<bim-button style="flex: 0" @click=${u} icon="tabler:link"></bim-button>`;a=l`
      <div style="display: flex; justify-content: right; gap: 0.25rem">
        ${d()}
        <div style="display: flex; justify-content: right; gap: 0.25rem">
          ${r.add?g:null}
          ${r.link?T:null}
        </div>
      </div> 
    `}return l`
    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
      ${a}
      ${b}
      ${p}
    </div> 
  `},je=e=>A.create(oe,e),Re=Object.freeze(Object.defineProperty({__proto__:null,topicViewpoints:je,topicViewpointsSectionTemplate:oe},Symbol.toStringTag,{value:"Module"})),P={...Ie,...Ce,..._e,...Re},Be=e=>l`
    <bim-panel-section fixed label="New Topic" name="topic">
      ${ee(e)}
    </bim-panel-section>
  `,Le=e=>A.create(Be,e),Pe=Object.freeze(Object.defineProperty({__proto__:null,topic:Le},Symbol.toStringTag,{value:"Module"})),Fe={...Pe};S.init();const q=document.createElement("bim-viewport"),k=new be,Ue=k.get(ue),I=Ue.create(),le=new fe(k);le.setup();I.scene=le;const se=new ye(k,q);I.renderer=se;const ae=new ge(k);I.camera=ae;await I.camera.controls.setLookAt(68,23,-8.5,21.5,-5.5,23);q.addEventListener("resize",()=>{se.resize(),ae.updateAspect()});k.init();const Oe=k.get($e);Oe.create(I);const B=k.get(we),Ee="https://thatopen.github.io/engine_fragment/resources/worker.mjs",ze=await fetch(Ee),Me=await ze.blob(),Ve=new File([Me],"worker.mjs",{type:"text/javascript"}),qe=URL.createObjectURL(Ve);B.init(qe);I.camera.controls.addEventListener("rest",()=>B.core.update(!0));B.list.onItemSet.add(async({value:e})=>{e.useCamera(I.camera.three),I.scene.three.add(e.object),await B.core.update(!0)});const Ke=["https://thatopen.github.io/engine_components/resources/frags/school_arq.frag","https://thatopen.github.io/engine_components/resources/frags/school_str.frag"];await Promise.all(Ke.map(async e=>{var n;const o=(n=e.split("/").pop())==null?void 0:n.split(".").shift();if(!o)return null;const i=await(await fetch(e)).arrayBuffer();return B.core.load(i,{modelId:o})}));const U={"jhon.doe@example.com":{name:"Jhon Doe",picture:"https://www.profilebakery.com/wp-content/uploads/2023/04/Profile-Image-AI.jpg"},"user_a@something.com":{name:"User A",picture:"https://www.profilebakery.com/wp-content/uploads/2023/04/Portrait-Photography.jpg"},"user_b@something.com":{name:"User B",picture:"https://www.profilebakery.com/wp-content/uploads/2023/04/AI-Portrait.jpg"}},_=k.get(V);_.setup({users:new Set(Object.keys(U)),labels:new Set(["Architecture","Structure","MEP"])});const Ne=k.get(Z);_.list.onItemSet.add(({value:e})=>{const o=Ne.create();o.world=I,e.viewpoints.add(o.guid)});const[L]=ke.topicsList({components:k,dataStyles:{users:U}});L.selectableRows=!0;const[Ge,We]=Fe.topic({components:k,styles:{users:U}}),F=A.create(()=>l`
    <dialog class="form-dialog">
     <bim-panel style="border-radius: var(--bim-ui_size-base); width: 22rem;">
      ${Ge}
     </bim-panel> 
    </dialog>
  `);document.body.append(F);const He=A.create(()=>l`
    <bim-button style="flex: 0" @click=${()=>{F.showModal()}} label="Create Topic" icon="material-symbols:task"></bim-button>
  `);We({onCancel:()=>{F.close()},onSubmit:()=>{F.close()}});const[Je,re]=A.create(e=>{const{components:o,topic:t,world:i,actions:n,styles:s}=e;let r,m;if(t){const[p]=P.topicInformation({components:o,topic:t,actions:n==null?void 0:n.information,styles:s}),[v]=P.topicViewpoints({components:o,topic:t,world:i,actions:n==null?void 0:n.viewpoints}),[d]=P.topicRelations({components:o,topic:t,actions:n==null?void 0:n.relatedTopics}),[b]=P.topicComments({topic:t,actions:n==null?void 0:n.comments,styles:s==null?void 0:s.users}),a=()=>{window.alert(`An email will be sent to ${t.assignedTo}! (obviosuly not, this is just for demo purposes)`)};r=l`
        <bim-panel-section label="Information" icon="ph:info-bold">
          ${p}
        </bim-panel-section>
        <bim-panel-section label="Comments" icon="majesticons:comment-line">
          ${b}
        </bim-panel-section>
        <bim-panel-section label="Viewpoints" icon="tabler:camera">
          ${v}
        </bim-panel-section>
        <bim-panel-section label="Related Topics" icon="tabler:link">
          ${d}
        </bim-panel-section>
        <!-- This is a custom section where you can add any functionality you like -->
        <bim-panel-section label="Communication" icon="tabler:link">
          ${t.assignedTo?l`
                <bim-button @click=${a} label="Send Mail Reminder" icon="mingcute:send-fill"></bim-button> 
              `:l`
                <bim-label style="white-space: normal">The topic must have an assignee to use the communication tools. Update the topic with a new assignee!</bim-label>
              `}
        </bim-panel-section>
      `}else m=l`
        <bim-panel-section label="Missing Topic" icon="material-symbols:chat-error">
          ${t?null:l`<bim-label>There is no topic to display in this panel!</bim-label>`}
        </bim-panel-section> 
      `;return l`
      <bim-panel>
        ${m}
        ${r}
      </bim-panel> 
    `},{components:k,world:I,styles:{users:U}});_.list.onItemUpdated.add(()=>re());L.addEventListener("rowcreated",e=>{const{row:o}=e.detail;o.addEventListener("click",()=>{const{Guid:t}=o.data;if(!t)return;const i=_.list.get(t);i&&re({topic:i})}),o.style.cursor="pointer",o.addEventListener("mouseover",()=>{o.style.backgroundColor=`color-mix(
        in lab,
        var(--bim-ui_bg-contrast-20) 30%,
        var(--bim-ui_main-base) 10%
      )`}),o.addEventListener("mouseout",()=>{o.style.removeProperty("background-color")})});const Qe=A.create(()=>l`<bim-button style="flex: 0" @click=${async()=>{const o=[...L.selection].map(({Guid:r})=>r&&typeof r=="string"?_.list.get(r):null).filter(r=>r),t=o.length>0?o:[..._.list.values()];if(t.length===0)return;const i=await _.export(t),n=new File([i],"topics.bcf"),s=document.createElement("a");s.href=URL.createObjectURL(n),s.download=n.name,s.click(),URL.revokeObjectURL(s.href)}} label="Download BCF" icon="material-symbols:download"></bim-button> `),Xe=A.create(()=>l`
    <bim-panel>
      <bim-panel-section label="BCF" fixed>
        <div style="display: flex; justify-content: space-between; gap: 0.5rem">
          <bim-text-input style="flex-grow: 0; flex-basis: 15rem" @input=${o=>{const t=o.target;L.queryString=t.value}} placeholder="Search a topic..." debounce="100"></bim-text-input>
          <div style="display: flex; gap: 0.5rem">
            ${He}
            ${Qe}
          </div> 
        </div> 
        ${L}
      </bim-panel-section>
    </bim-panel>
  `),K=document.createElement("bim-grid");K.layouts={main:{template:`
    "customTopicPanel viewport"
    "customTopicPanel bcfPanel" 25rem
    /24rem 1fr
    `,elements:{bcfPanel:Xe,viewport:q,customTopicPanel:Je}}};K.layout="main";document.body.append(K);
