/* eslint-disable no-alert */
import * as BUI from "../..";

BUI.Manager.init();

const list: string[] = [];

for (let index = 0; index < 6000; index++) {
  list.push(`${index}`);
}

const numbersListTemplate = () => {
  return BUI.html`
    <div>
      ${list.map((value) => BUI.html`<bim-label>${value}</bim-label>`)}
    </div>
  `;
};

interface ContentState {
  name: string;
}

type AppLayouts = {
  main: ["el"];
  app: ["input", "btn", "list", { name: "content"; state: ContentState }];
};

// @ts-ignore
const grid = document.body.querySelector<BUI.Grid<AppLayouts>>("bim-grid")!;

grid.layouts = {
  main: {
    template: ``,
    elements: {},
  },
  app: {
    template: ``,
    elements: {},
  },
};

// Global state
const userDetails = {
  name: "Juan",
};

const input = () => {
  const onChange = (e: Event) => {
    const input = e.target as BUI.TextInput;
    userDetails.name = input.value;
    // @ts-ignore
    grid.updateComponent?.app.content({ name: userDetails.name });
  };
  return BUI.html`<bim-text-input @input=${onChange} value=${userDetails.name}></bim-text-input>`;
};

grid.layouts = {
  main: {
    template: ``,
    elements: {
      el: document.createElement("div"),
    },
    guard: () => false,
  },
  app: {
    template: `
      "input btn" auto
      "content content" auto
      "list list" 1fr
    `,
    elements: {
      input: BUI.Component.create(input),
      btn: BUI.Component.create(() => {
        const onClick = () => {
          // @ts-ignore
          grid.layouts.app.elements.list = numbersListTemplate;
          // @ts-ignore
          delete grid.layouts.app.elements.btn;
          // @ts-ignore
          grid.layouts.app.template = `
            "input" auto
            "content" auto
            "list" 1fr
          `;
          grid.requestUpdate();
        };
        return BUI.html`<bim-button label="Click me" @click=${onClick}></bim-button>`;
      }),
      content: {
        template: (state: ContentState) => {
          return BUI.html`<bim-label>${state.name}</bim-label>`;
        },
        initialState: userDetails,
      },
      // list: BUI.Component.create(numbersListTemplate), // Not optimized as it always holds a reference of the created HTMLElement
      // list: numbersListTemplate, // Optimized as it just holds the template of the element to be rendered, but not the created HTMLElement.
    },
  },
};

// grid.updateComponent?.app.content();

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
