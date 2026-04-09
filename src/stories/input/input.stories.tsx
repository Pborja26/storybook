import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Input from "./input";
import * as typeValues from "../utils/typeValues";

const meta = {
  title: "Example/Input",
  component: Input,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    cursor: {
      control: "select",
      options: typeValues.CursorValues,
      description: "CSS cursor values"
    },
    disabled: {
      control: "boolean",
    }
  }
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
    onChange: (e) => {},
    value: "",
    disabled: false,
    padding: "8px 16px",
    borderRadius: "16px"
  }
}