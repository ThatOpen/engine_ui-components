import type { Meta, StoryObj } from "@storybook/web-components";
import * as BUI from "../..";
import "./example.css";

BUI.Manager.init();

const meta: Meta = {
  title: "Components/Checkbox",
  component: "bim-checkbox",
  tags: ["autodocs"],
  args: {
    label: "Is this UI great?",
  },
  argTypes: {
    change: {
      control: false,
    },
    value: {
      control: false,
    },
  },
};

export default meta;

export const Default: StoryObj = {};
