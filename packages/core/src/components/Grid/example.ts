/* eslint-disable no-alert */
import * as BUI from "../..";

BUI.Manager.init();

const leftPanel = BUI.Component.create<BUI.Panel>(() => {
  const onBtnClick = () => {
    alert("You clicked me!");
  };
  return BUI.html`
    <bim-panel label="My Panel!">
      <bim-panel-section label="Panel Section" icon="solar:settings-bold">
        <bim-label>This is just a panel section... cool, right?</bim-label>
        <bim-button @click=${onBtnClick} label="Click me!"></bim-button>
        <bim-selector label="Choose">
          <bim-option label="Option A"></bim-option>
          <bim-option label="Option B" checked></bim-option>
        </bim-selector>
        <bim-color-input></bim-color-input>
        <bim-dropdown>
          <bim-option label="Option A" checked></bim-option>
          <bim-option label="Option B"></bim-option>
          <bim-option label="Option C"></bim-option>
        </bim-dropdown>
        <bim-text-input label="Ultra nice text input" placeholder="Write something..."></bim-text-input>
        <bim-checkbox label="Is That Open Company nice?" checked></bim-checkbox>
        <bim-number-input label="I'm a number input :)" pref="#" suffix="un"></bim-number-input>
      </bim-panel-section>
    </bim-panel>
  `;
});

const ribbon = BUI.Component.create<BUI.Tabs>(() => {
  // eslint-disable-next-line no-restricted-globals
  const onThatOpenPeopleClick = () => open("https://people.thatopen.com/home");

  return BUI.html`
   <bim-tabs>
    <bim-tab label="Toolbar A">
      <bim-toolbar>
        <bim-toolbar-section label="Some section">
          <bim-button label="Home" vertical icon="ic:round-home"></bim-button>
          <bim-button label="That Open People" vertical icon="eva:people-fill" @click=${onThatOpenPeopleClick}></bim-button>
          <bim-toolbar-group>
            <bim-button icon="solar:settings-bold"></bim-button>
            <bim-button icon="solar:settings-bold"></bim-button>
            <bim-button icon="solar:settings-bold"></bim-button>
            <bim-button icon="solar:settings-bold"></bim-button>
          </bim-toolbar-group>
        </bim-toolbar-section>
      </bim-toolbar>
    </bim-tab>
    <bim-tab label="Toolbar B">
      <bim-toolbar>
        <bim-toolbar-section label="Some other section">
          <bim-button label="Focus" vertical icon="material-symbols:center-focus-strong"></bim-button>
        </bim-toolbar-section>
      </bim-toolbar>
    </bim-tab>
   </bim-tabs> 
  `;
});

const bottomPanel = BUI.Component.create<BUI.Panel>(() => {
  const onTableCreated = (element?: Element) => {
    if (!element) return;
    const table = element as BUI.Table;
    const sharedStyles = {
      padding: "0.25rem 0.375rem",
      borderRadius: "0.25rem",
    };
    table.dataTransform = {
      Status: (value) => {
        if (typeof value !== "string") return value;
        if (value === "In Progress") {
          const style = {
            ...sharedStyles,
            backgroundColor: "#3c59c3",
            color: "white",
          };
          return BUI.html`<bim-label style=${BUI.styleMap(style)}>${value}</bim-label>`;
        }
        if (value === "Pending") {
          const style = {
            ...sharedStyles,
            backgroundColor: "#5c5c5c",
            color: "white",
          };
          return BUI.html`<bim-label style=${BUI.styleMap(style)}>${value}</bim-label>`;
        }
        if (value === "Completed") {
          const style = {
            ...sharedStyles,
            backgroundColor: "#3a7829",
            color: "white",
          };
          return BUI.html`<bim-label style=${BUI.styleMap(style)}>${value}</bim-label>`;
        }
        if (value === "Scheduled") {
          const style = {
            ...sharedStyles,
            backgroundColor: "#9e2980",
            color: "white",
          };
          return BUI.html`<bim-label style=${BUI.styleMap(style)}>${value}</bim-label>`;
        }
        return value;
      },
      AssignedTo: (value, row) => {
        const onClick = () => {
          const { Task } = row;
          alert(`Will send ${value} a reminder of ${Task}!`);
        };
        return BUI.html`
          <div style="display: flex; gap: 0.5rem">
            <bim-label>${value}</bim-label>
            <bim-button @click=${onClick} icon="mingcute:send-fill" tooltip-title="Send reminder!"></bim-button>
          </div> 
        `;
      },
    };
    table.data = [
      {
        data: {
          Task: "Code Review",
          Description: "Review code for the new feature implementation",
          AssignedTo: "Alice",
          DueDate: "2024-05-20",
          Status: "In Progress",
        },
      },
      {
        data: {
          Task: "Write Documentation",
          Description: "Write user documentation for the latest release",
          AssignedTo: "Bob",
          DueDate: "2024-05-25",
          Status: "Pending",
        },
      },
      {
        data: {
          Task: "Unit Testing",
          Description: "Create and run unit tests for the new modules",
          AssignedTo: "Charlie",
          DueDate: "2024-05-22",
          Status: "Completed",
        },
      },
      {
        data: {
          Task: "Deploy to Staging",
          Description: "Deploy the current build to the staging environment",
          AssignedTo: "David",
          DueDate: "2024-05-18",
          Status: "Pending",
        },
      },
      {
        data: {
          Task: "UI Design",
          Description: "Design the user interface for the new dashboard",
          AssignedTo: "Eve",
          DueDate: "2024-05-30",
          Status: "In Progress",
        },
      },
      {
        data: {
          Task: "Database Migration",
          Description: "Migrate the database schema to the new version",
          AssignedTo: "Frank",
          DueDate: "2024-05-21",
          Status: "Not Started",
        },
      },
      {
        data: {
          Task: "Client Meeting",
          Description: "Discuss project requirements and deliverables",
          AssignedTo: "Grace",
          DueDate: "2024-05-19",
          Status: "Scheduled",
        },
      },
      {
        data: {
          Task: "Bug Fixing",
          Description: "Fix critical bugs reported by QA",
          AssignedTo: "Hank",
          DueDate: "2024-05-23",
          Status: "In Progress",
        },
      },
      {
        data: {
          Task: "Performance Optimization",
          Description: "Optimize the application for better performance",
          AssignedTo: "Ivy",
          DueDate: "2024-05-27",
          Status: "Pending",
        },
      },
      {
        data: {
          Task: "Code Merge",
          Description: "Merge the feature branch into the main branch",
          AssignedTo: "Jack",
          DueDate: "2024-05-24",
          Status: "Completed",
        },
      },
    ];
  };

  return BUI.html`
    <bim-panel>
      <bim-panel-section label="Assignments" fixed>
        <bim-table ${BUI.ref(onTableCreated)}></bim-table>
      </bim-panel-section>
    </bim-panel> 
  `;
});

const rightPanel = BUI.Component.create<BUI.Panel>(() => {
  const onBtnClick = () => {
    alert("You are awesome 😏");
  };
  return BUI.html`
    <bim-panel>
      <bim-panel-section label="Panel Section" icon="solar:settings-bold">
        <bim-button @click=${onBtnClick} label="Click me!"></bim-button>
        <bim-selector value="Option A">
          <bim-option label="Option A" checked></bim-option>
          <bim-option label="Option B"></bim-option>
        </bim-selector>
      </bim-panel-section>
    </bim-panel>
  `;
});

const viewport = document.createElement("bim-viewport");

type LayoutElements = {
  main: ["header", "sidebar", "content"];
  app: ["ribbon", "leftPanel", "viewport", "rightPanel", "bottomPanel"];
};

const grid = document.body.querySelector<BUI.Grid<LayoutElements>>("bim-grid")!;

grid.layouts = {
  main: {
    template: `
      "header header" 80px
      "sidebar content" 1fr
      / 80px 1fr
    `,
    elements: {
      header: (() => {
        const header = document.createElement("div");
        header.style.backgroundColor = "#641b1b66";
        return header;
      })(),
      sidebar: (() => {
        const sidebar = document.createElement("div");
        sidebar.style.backgroundColor = "#1b536466";
        return sidebar;
      })(),
      content: (() => {
        const content = document.createElement("div");
        content.style.backgroundColor = "#1b644c66";
        return content;
      })(),
    },
  },
  app: {
    template: `
      "ribbon ribbon ribbon" auto
      "leftPanel viewport rightPanel" 2fr
      "leftPanel bottomPanel bottomPanel" 1fr
      / 22rem 1fr 20rem
    `,
    elements: {
      ribbon,
      leftPanel,
      viewport,
      bottomPanel,
      rightPanel,
    },
  },
};

grid.addEventListener("layoutchange", () => {
  if (grid.layout) {
    alert(`Your have changed to "${grid.layout}" layout!`);
  } else {
    alert(`Your have cleaned up your layout!`);
  }
});

const btn = document.body.querySelector<BUI.Button>("bim-button")!;
btn.addEventListener("click", () => {
  const { layout } = grid;
  switch (layout) {
    case undefined:
      grid.layout = "main";
      break;
    case "main":
      grid.layout = "app";
      break;
    case "app":
      grid.layout = undefined;
      break;
    default:
      console.log("No follow up action");
  }
});
