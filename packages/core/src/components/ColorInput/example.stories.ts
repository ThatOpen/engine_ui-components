import type { Meta, StoryObj } from "@storybook/web-components";
import * as BUI from "../..";
import "./example.css";

BUI.Manager.init();

const meta: Meta = {
  title: "Components/Color Input",
  component: "bim-color-input",
  tags: ["autodocs"],
  args: {
    label: "What is your favorite color?",
  },
  argTypes: {
    input: {
      control: false,
    },
    value: {
      control: false,
    },
  },
};

export default meta;

export const Default: StoryObj = {};
