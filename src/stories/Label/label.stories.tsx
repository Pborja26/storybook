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
    size: 20,
    weight: 400,
    color: "#000",
    bgColor: "transparent",
    padding: "",
    radius: "",
    width: "fit-content",
    height: "fit-content",
    style: {}
  }
}

export const Badge: Story = {
  args: {
    label: "Label with badge",
    size: 16,
    weight: 600,
    color: "#fff",
    bgColor: "#18bf09",
    padding: "4px 8px",
    radius: "20px",
    width: "fit-content",
    height: "fit-content",
    style: {}
  }
}
