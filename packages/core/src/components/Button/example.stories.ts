// import { InputType } from "storybook/internal/types";
import type { Meta, StoryObj } from "@storybook/web-components";
import { html, HTMLTemplateResult } from "lit";
import * as BUI from "../..";
import "./example.css";

BUI.Manager.init();

const styles = {
  Default: {
    base: {},
    hover: {},
  },
  one: {
    base: {
      "--bim-label--c": "rgb(255 97 97)",
      "background-color": "rgb(182 19 19 / 40%)",
      "border-radius": "100px",
    },
    hover: {
      "--bim-label--c": "rgb(239, 75, 75)",
      "background-color": "rgb(182 19 19 / 50%)",
      outline: "1px solid rgb(239, 75, 75)",
    },
  },
  two: {
    base: {
      "background-color": "transparent",
      width: "min-content",
    },
    hover: {
      "--bim-label--c": "var(--bim-ui_accent-base)",
    },
  },
};

const meta: Meta = {
  title: "Components/Button",
  component: "bim-button",
  tags: ["autodocs"],
  args: {
    label: "My button!",
    icon: "solar:settings-bold",
  },
  argTypes: {
    style: {
      control: false,
      table: { disable: true },
    },
    rules: {
      description: "Use this as a playground to give styling to the button.",
      table: { category: "Styling" },
      control: "object",
    },
    click: {
      control: false,
    },
  },
  decorators: [
    (story, context) => {
      const { rules, icon, style } = context.args;
      const btn = story() as BUI.Button;
      btn.icon = icon; // Had to set it manually for some reason
      let styleTag: HTMLTemplateResult | undefined;
      if (rules) {
        btn.className = style;
        const baseStyle = Object.entries(rules.base)
          .map(([key, value]) => `${key}: ${value};`)
          .join(" ");

        const hoverStyle = Object.entries(rules.hover)
          .map(([key, value]) => `${key}: ${value};`)
          .join(" ");

        styleTag = html`
          <style>
            .${style} {
              ${baseStyle}
            }
            .${style}:hover {
              ${hoverStyle}
            }
          </style>
        `;
      }
      return html` <div>${styleTag} ${btn}</div> `;
    },
  ],
};

export default meta;

export const Default: StoryObj = {
  args: {
    rules: styles.Default,
  },
};

export const CustomStylingA: StoryObj = {
  args: {
    style: "one",
    rules: styles.one,
  },
};

export const CustomStylingB: StoryObj = {
  args: {
    style: "two",
    rules: styles.two,
  },
};
