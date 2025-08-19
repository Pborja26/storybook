import type { Meta, StoryObj } from "@storybook/react";
import Select from "./select";

const meta = {
  title: "Example/Select",
  component: Select,
  parameters: {
    layout: "centered",
    args: { width: "100%" }
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [],
    value: { label: "", value: 0 },
    setValue: (e) => {},
    width: "100%",
    disabled: false,
    required: false
  }
}
