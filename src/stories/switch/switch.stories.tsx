import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Switch from "./switch";
import * as typeValues from "../utils/typeValues";

const meta = {
  title: "Example/Switch",
  component: Switch,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    cursor: {
      control: "select",
      options: typeValues.CursorValues,
      description: "CSS cursor values"
    }
  }
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onChange: (e) => {},
    value: true,
    width: 20
  }
}