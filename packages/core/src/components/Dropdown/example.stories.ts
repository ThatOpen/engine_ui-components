import type { Meta, StoryObj } from "@storybook/web-components";
import { html, HTMLTemplateResult } from "lit";
import * as BUI from "../..";
import "./example.css";

BUI.Manager.init();

const styles = {
  Default: {
    base: {},
    visible: {},
  },
  one: {
    base: {
      "--bim-dropdown--c": "rgb(239, 75, 75)",
      "--bim-input--bgc": "rgb(182 19 19 / 50%)",
      "--bim-input--bdrs": "100px",
    },
    visible: {
      "--bim-input--olc": "rgb(239, 75, 75)",
    },
  },
};

const meta: Meta = {
  title: "Components/Dropdown",
  component: "bim-dropdown",
  tags: ["autodocs"],
  args: {
    label: "Which BIM format do you prefer?",
  },
  argTypes: {
    style: {
      control: false,
      table: { disable: true },
    },
    rules: {
      description: "Use this as a playground to give styling.",
      table: { category: "Styling" },
      control: "object",
    },
    change: {
      control: false,
    },
    value: {
      control: false,
    },
    useObserver: {
      control: false,
    },
  },
  decorators: [
    (story, context) => {
      const { rules, style } = context.args;
      const el = story() as BUI.Dropdown;
      const options = ["IFC", "RVT"];
      for (const option of options) {
        const optionElement = document.createElement("bim-option");
        optionElement.label = option;
        el.append(optionElement);
      }
      let styleTag: HTMLTemplateResult | undefined;
      if (rules) {
        el.className = style;
        const baseStyle = Object.entries(rules.base)
          .map(([key, value]) => `${key}: ${value};`)
          .join(" ");

        const visibleStyle = Object.entries(rules.visible)
          .map(([key, value]) => `${key}: ${value};`)
          .join(" ");

        styleTag = html`
          <style>
            .${style} {
              ${baseStyle}
            }
            .${style}[visible] {
              ${visibleStyle}
            }
          </style>
        `;
      }
      return html` <div>${styleTag} ${el}</div> `;
    },
  ],
};

export default meta;

export const Default: StoryObj = {
  args: {
    rules: styles.Default,
  },
};

export const CustomStyling: StoryObj = {
  args: {
    style: "one",
    rules: styles.one,
  },
};
