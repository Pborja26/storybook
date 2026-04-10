import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Button from "./button";
import * as typeValues from "../utils/typeValues";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    display: {
      control: "select",
      options: typeValues.DisplayValues,
      description: "CSS Display values"
    },
    flexDirection: {
      control: "select",
      options: typeValues.DirectionValues
    },
    justifyContent: {
      control: "select",
      options: typeValues.JustifyValues
    },
    alignItems: {
      control: "select",
      options: typeValues.AlignValues
    },
    cursor: {
      control: "select",
      options: typeValues.CursorValues,
      description: "CSS cursor values"
    },
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    children: "Button Content",
    onClick: () => {},
    padding: "8px 10px",
    borderRadius: 8
  }
}