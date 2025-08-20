import type { Meta, StoryObj } from "@storybook/react";
import Container from "./container";

const meta = {
  title: "Example/Container",
  component: Container,
  parameters: {
    layout: "centered",
    args: { width: "100%" }
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: "20px",
    height: "20px",
    maxheight: "",
    maxwidth: "",
    display: "flex",
    direction: "column",
    radius: "8px",
    padding: "1rem",
    bgcolor: "#acacacff",
    border: "2px solid #000",
    style: {},
    overflowX: "auto",
    overflowY: "auto",
    children: "",
    gap: "1px"
  }
}
