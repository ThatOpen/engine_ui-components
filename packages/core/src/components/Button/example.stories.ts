import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import * as BUI from "../..";
import { Button } from "..";
import "./example.css";

BUI.Manager.init();

const classStyles = {
  "btn-1": `
    .btn-1 {
      --bim-label--c: rgb(255 97 97);
      background-color: rgb(182 19 19 / 40%);
      border-radius: 100px;
    }

    .btn-1:hover {
      --bim-label--c: rgb(239, 75, 75);
      background-color: rgb(182 19 19 / 50%);
      outline: 1px solid rgb(239, 75, 75);
    }
  `,
  "btn-2": `
    .btn-2 {
      background-color: transparent;
    }

    .btn-2:hover {
      --bim-label--c: var(--bim-ui_accent-base);
    }
  `,
};

const meta: Meta<typeof Button> = {
  component: "bim-button",
  tags: ["autodocs"],
};

export default meta;

export const Primary: StoryObj = {
  args: {
    label: "My button!",
    vertical: false,
    icon: "solar:settings-bold",
    labelHidden: false,
    active: false,
    disabled: false,
    tooltipTime: 700,
    tooltipTitle: "Hi there!",
    tooltipText: "This is the tooltip description",
    color: "#ffffff",
  },
  argTypes: {
    "Style Example": {
      type: "string",
      control: { type: "select" },
      options: ["Default", "btn-1", "btn-2"],
    },
  },
  decorators: [
    (story, context) => {
      const btn = story() as BUI.Button;
      // @ts-ignore
      const styleCode = classStyles[context.args["Style Example"]];
      btn.className = context.args["Style Example"];
      return html`
        <div>
          ${btn}
          <pre style="background: #f8f8f8; padding: 10px; border-radius: 4px;">
            <code>${styleCode}</code>
          </pre
          >
        </div>
      `;
    },
  ],
};
