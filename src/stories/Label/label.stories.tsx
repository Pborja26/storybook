import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Label from "./label";

const meta = {
  title: "Example/Label",
  component: Label,
  parameters: {
    layout: "centered",
    args: { width: "100%" }
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Default Label",
    size: 12,
    weight: 400,
    color: "#000",
    bgcolor: "transparent",
    padding: "",
    radius: "",
    width: "fit-content",
    height: "fit-content",
    style: {}
  }
}
