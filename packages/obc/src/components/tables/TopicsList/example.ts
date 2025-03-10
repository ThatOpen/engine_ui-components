/* MD 
  ## Showing BCF Topics the Easy Way ✨
  ---
  Integration with BIM Collaboration Format is probably one of those features you want to have in your app sooner than later. Problem is, many UIs are needed (one to display the topics, another to create them, another to edit everything, etc). Well, hold tight as here you will learn all you need to know in order to use the power of UI Components to accomplish a fully working user interface for your next BCF integration!

  ### 🏗 Scaffolding the Application
  First of all, let's import the dependencies we need to get this working:
  */

// eslint-disable-next-line import/no-extraneous-dependencies
import * as CUI from "@thatopen/ui-obc";
import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";

/* MD 
  Next, it's always necessary to initialize the core UI library no matter if you're using functional components from `@thatopen/ui-obc`. Also, let's setup `@thatopen/components` with the minimum things to get a [World](/Tutorials/Components/Core/Worlds) up and running to load models.
  */

BUI.Manager.init();

const viewport = document.createElement("bim-viewport");

const components = new OBC.Components();

const worlds = components.get(OBC.Worlds);

const world = worlds.create();
const sceneComponent = new OBC.SimpleScene(components);
sceneComponent.setup();
world.scene = sceneComponent;

const rendererComponent = new OBC.SimpleRenderer(components, viewport);
world.renderer = rendererComponent;

const cameraComponent = new OBC.SimpleCamera(components);
world.camera = cameraComponent;
cameraComponent.controls.setLookAt(10, 5.5, 5, -4, -1, -6.5);

viewport.addEventListener("resize", () => {
  rendererComponent.resize();
  cameraComponent.updateAspect();
});

components.init();

const grids = components.get(OBC.Grids);
grids.create(world);

/* MD 
  ### 🏦 Loading a Model and Setting the BCFTopics
  Just after setting up the world, let's programatically load a model 👇
  */

const ifcLoader = components.get(OBC.IfcLoader);
await ifcLoader.setup();
const file = await fetch(
  "https://thatopen.github.io/engine_ui-components/resources/small.ifc",
);
const buffer = await file.arrayBuffer();
const typedArray = new Uint8Array(buffer);
const model = await ifcLoader.load(typedArray);
world.scene.three.add(model);

/* MD
  :::tip

  You don't need to add the model into the scene to create topics! We just add it for demostration purposes.

  :::

  Before creating the table to display topics to the user, let's do some initial setup of the BCFTopics component. If you're unsure about the basics of working with the BCFTopics component, first check the corresponding tutorial.
  */

const users: CUI.TopicUserStyles = {
  "jhon.doe@example.com": {
    name: "Jhon Doe",
    picture:
      "https://www.profilebakery.com/wp-content/uploads/2023/04/Profile-Image-AI.jpg",
  },
  "user_a@something.com": {
    name: "User A",
    picture:
      "https://www.profilebakery.com/wp-content/uploads/2023/04/Portrait-Photography.jpg",
  },
  "user_b@something.com": {
    name: "User B",
    picture:
      "https://www.profilebakery.com/wp-content/uploads/2023/04/AI-Portrait.jpg",
  },
};

const topics = components.get(OBC.BCFTopics);

// We setup the component to create a list of users.
// This list will appear automatically in the topics form.
// The recommendation is always set an email (as per the BCF standard).
topics.setup({
  users: new Set(Object.keys(users)),
  labels: new Set(["Architecture", "Structure", "MEP"]),
});

// Add a default viewpoint to the topics each time they get created.
const viewpoints = components.get(OBC.Viewpoints);
topics.list.onItemSet.add(({ value: topic }) => {
  const viewpoint = viewpoints.create(world);
  topic.viewpoints.add(viewpoint.guid);
});

/* MD
  Once the BCFTopics component has been initialized, let's see how to setup a plug-n-play UI for it! The BIM Components UI package (@thatopen/ui-obc) comes with some UIs to support the usage of the BCFTopics component. Among the components you got:
  

  👉 TopicsList: a table to display the topics created with the component (or the ones you choose to see).


  👉 TopicForm: a form to create new or update existing topics.


  👉 TopicComments: a table to display the list of comments for a single topic.


  👉 TopicCommentsSection: an element to display the comments for a single topic and also a text area to add them.


  👉 TopicInformationSection: an element to display the topic markup information and a button with the form included to update it.
  
  
  👉 TopicRelationsSection: an element to display the topics related with another and the functionality to link them.
  
  
  👉 TopicViewpointsSection: an element to display the topics viewpoints with the functionality create new or link existing viewpoints.


  Is entirely up to you what to use, but using them together gives you a ready to go UI with everything you need to have a production ready BCF integration in your BIM app! Let's start with the topics list table.

  ### 🔨 Displaying the Topics List in a Table
  The topics list table is the easiest way to display all topics created in the app using the BCFTopics component. Creating it is really simple, as you just need to write the following:
  */

const [topicsList, updateTopicsList] = CUI.tables.topicsList({
  components,
  dataStyles: { users },
});

// Let's make row selection possible so we can decide which topics to download.
topicsList.selectableRows = true;

/* MD
  That's it. You don't need anything else other than creating an instance of the UI component and place it anywhere you want in the app. The table updates by it-self anytime a new topic has been created or modified! 
  
  ### 📃 Using the Topics Form UI
  Let's now define a topic form so creating them is easier than ever:
 */

const [topicForm, updateTopicForm] = CUI.forms.topic({
  components,
  styles: { users },
});

// We won't add the form directly to the page, but will wrap it inside a dialog element to show it as a modal.
const topicsModal = BUI.Component.create<HTMLDialogElement>(() => {
  return BUI.html`
    <dialog class="form-dialog">
     <bim-panel style="border-radius: var(--bim-ui_size-base); width: 22rem;">
      ${topicForm}
     </bim-panel> 
    </dialog>
  `;
});

document.body.append(topicsModal);

/* MD
  As the modal is already on the page, lets create a very simple button to display the modal on demand:
  */

const showFormBtn = BUI.Component.create(() => {
  const onClick = () => {
    topicsModal.showModal();
  };

  return BUI.html`
    <bim-button style="flex: 0" @click=${onClick} label="Create Topic" icon="material-symbols:task"></bim-button>
  `;
});

/* MD
  The form component already includes the classic submit and cancel buttons. You can access them from the element by using querySelectors, but its more cumbersome than it should be. For that reason, the form state includes one callback for each button, so you decide what happens when they are clicked. In this case, the most logical thing is to close the modal when the user clicks them. Let's update the form state to include the callbacks:
  */

updateTopicForm({
  onCancel: () => {
    topicsModal.close();
  },
  onSubmit: () => {
    // There is no need to create the topic, it happens automatically inside the form component.
    topicsModal.close();
  },
});

/* MD
  Awesome! Topic form setup correctly 😎
  
  ### 🎫 Creating a Custom Topic Panel
  With the form set up, what if we use the topic panel to see it's full information? Typically, you will display the full information for one topic at the same time; in such case, you only need to create one topic panel component. However, you can create as many panels as you need. In this tutorial we will create one as follows:
  */

// You don't have to create this interface, it's made just for demonstration purposes.
// This interface allows you to update the actions in each functional section of the topics UI.
// This is great when you have an app with user permission settings.
interface TopicPanelActions {
  information: Partial<CUI.TopicInformationSectionActions>;
  viewpoints: Partial<CUI.TopicViewpointsSectionActions>;
  relatedTopics: Partial<CUI.TopicRelationsSectionActions>;
  comments: Partial<CUI.TopicCommentsSectionActions>;
}

interface TopicPanelUI {
  components: OBC.Components;
  topic?: OBC.Topic;
  styles?: Partial<CUI.TopicStyles>;
  actions?: Partial<TopicPanelActions>;
  world?: OBC.World;
}

// By default, it doesn't know which topic to display, so will show a default message of not topic selected.
const [topicPanel, updateTopicPanel] = BUI.Component.create(
  (state: TopicPanelUI) => {
    const { components, topic, world, actions, styles } = state;

    let topicSections: BUI.TemplateResult | undefined;
    let missingTopicSection: BUI.TemplateResult | undefined;

    if (topic) {
      const [information] = CUI.sections.topicInformation({
        components,
        topic,
        actions: actions?.information,
        styles,
      });

      const [viewpoints] = CUI.sections.topicViewpoints({
        components,
        topic,
        world,
        actions: actions?.viewpoints,
      });

      const [relatedTopics] = CUI.sections.topicRelations({
        components,
        topic,
        actions: actions?.relatedTopics,
      });

      const [comments] = CUI.sections.topicComments({
        topic,
        actions: actions?.comments,
        styles: styles?.users,
      });

      const onReminderClick = () => {
        // eslint-disable-next-line no-alert
        window.alert(
          `An email will be sent to ${topic.assignedTo}! (obviosuly not, this is just for demo purposes)`,
        );
      };

      topicSections = BUI.html`
        <bim-panel-section label="Information" icon="ph:info-bold">
          ${information}
        </bim-panel-section>
        <bim-panel-section label="Comments" icon="majesticons:comment-line">
          ${comments}
        </bim-panel-section>
        <bim-panel-section label="Viewpoints" icon="tabler:camera">
          ${viewpoints}
        </bim-panel-section>
        <bim-panel-section label="Related Topics" icon="tabler:link">
          ${relatedTopics}
        </bim-panel-section>
        <!-- This is a custom section where you can add any functionality you like -->
        <bim-panel-section label="Communication" icon="tabler:link">
          ${
            topic.assignedTo
              ? BUI.html`
                <bim-button @click=${onReminderClick} label="Send Mail Reminder" icon="mingcute:send-fill"></bim-button> 
              `
              : BUI.html`
                <bim-label style="white-space: normal">The topic must have an assignee to use the communication tools. Update the topic with a new assignee!</bim-label>
              `
          }
        </bim-panel-section>
      `;
    } else {
      missingTopicSection = BUI.html`
        <bim-panel-section label="Missing Topic" icon="material-symbols:chat-error">
          ${!topic ? BUI.html`<bim-label>There is no topic to display in this panel!</bim-label>` : null}
        </bim-panel-section> 
      `;
    }

    return BUI.html`
      <bim-panel>
        ${missingTopicSection}
        ${topicSections}
      </bim-panel> 
    `;
  },
  { components, world, styles: { users } },
);

// Lets update the topic panel in case the topic information gets update somewhere else in the app.
topics.list.onItemUpdated.add(() => updateTopicPanel());

/* MD
  :::tip

  If you're unsure about how to create custom functional UI components just like the panel above, take a look at the dedicated [Component](/Tutorials/UserInterface/Core/Component) tutorial.

  :::

  It looks scarier than what it actually is! We give you the functional pieces, then is entirely up to you how to stack them together to define your UIs. If we give you a pre-made panel with everything, it would be easier to implement but harder to customize. The way its made let you create a panel with all the functional pieces already working, but then you have the chance to keep adding custom UIs for other functionalities you may create on top of topics.

  When you know which topic data to display in the panel, then you can update the topic data component. What need to happen to update the topic data panel entirely depends on your app! However, the topics list table includes a callback that gets triggered each time a topic is clicked with a button located next to its title, lets use that in this case! For it, set the callback to update the topic panel with the clicked topic as follows:
  */

updateTopicsList({
  onTopicEnter: (topic) => {
    updateTopicPanel({ topic });
  },
});

/* MD
  ### ⏬ Creating a Button to Download BCFs
  To complete our BCF integration, let's create a button to download the topics created using the BCFTopics component:
  */

const downloadBtn = BUI.Component.create(() => {
  const onDownload = async () => {
    const selectedTopics = [...topicsList.selection]
      .map(({ Guid }) => {
        if (!(Guid && typeof Guid === "string")) return null;
        const topic = topics.list.get(Guid);
        return topic;
      })
      .filter((topic) => topic) as OBC.Topic[];

    const topicsToExport =
      selectedTopics.length > 0 ? selectedTopics : [...topics.list.values()];

    if (topicsToExport.length === 0) return;

    const bcfData = await topics.export(topicsToExport);
    const bcfFile = new File([bcfData], "topics.bcf");

    const a = document.createElement("a");
    a.href = URL.createObjectURL(bcfFile);
    a.download = bcfFile.name;
    a.click();
    URL.revokeObjectURL(a.href);
  };

  return BUI.html`<bim-button style="flex: 0" @click=${onDownload} label="Download BCF" icon="material-symbols:download"></bim-button> `;
});

/* MD
  ### 🥅 Creating a Panel to Hold the Table
  Let's now create a BIM Panel to hold the topics list while also adding the corresponding buttons to trigger the functionalities like showing the form and downloading the BCF file:
  */

const bcfPanel = BUI.Component.create(() => {
  const onTextInput = (e: Event) => {
    const input = e.target as BUI.TextInput;
    topicsList.queryString = input.value;
  };

  return BUI.html`
    <bim-panel>
      <bim-panel-section label="BCF" fixed>
        <div style="display: flex; justify-content: space-between; gap: 0.5rem">
          <bim-text-input style="flex-grow: 0; flex-basis: 15rem" @input=${onTextInput} placeholder="Search a topic..." debounce="100"></bim-text-input>
          <div style="display: flex; gap: 0.5rem">
            ${showFormBtn}
            ${downloadBtn}
          </div> 
        </div> 
        ${topicsList}
      </bim-panel-section>
    </bim-panel>
  `;
});

/* MD
  Finally, let's create a BIM Grid element and provide the panels to the viewport to display everything.
  */

const app = document.createElement("bim-grid");
app.layouts = {
  main: {
    template: `
    "customTopicPanel viewport"
    "customTopicPanel bcfPanel" 25rem
    /24rem 1fr
    `,
    elements: { bcfPanel, viewport, customTopicPanel: topicPanel },
  },
};

app.layout = "main";
document.body.append(app);

/* MD
  Congratulations! You have now created a fully working BCF user interface for your app in less than 10 minutes of work. Keep going with more tutorials! 💪
  */
