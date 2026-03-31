import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Container from "./Container";

const meta = {
  title: "Example/Container",
  component: Container,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    cursor: {
      control: "select",
      options: ["default", "pointer", "text", "help", "move", "not-allowed", "wait", "progress", "crosshair", "Grab", "Grabbing"],
      description: "CSS cursor values"
    },
    overflowX: {
      control: "select",
      options: ["hidden", "visible", "clip", "scroll", "auto"]
    },
    overflowY: {
      control: "select",
      options: ["hidden", "visible", "clip", "scroll", "auto"]
    },
    display: {
      control: "select",
      options: ["block", "inline-block", "none", "flex", "inline-flex", "grid", "inline-grid", "contents", "table"]
    },
    direction: {
      control: "select",
      options: ["row", "column", "row-reverse", "column-reverse"]
    },
    justifyContent: {
      control: "select",
      options: ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"]
    },
    alignItems: {
      control: "select",
      options: ["flex-start", "flex-end", "center", "baseline", "stretch", "start", "end", "normal"]
    }
  }
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: "20px",
    height: "20px",
    maxHeight: "",
    maxWidth: "",
    display: "flex",
    flexDirection: "column",
    borderRadius: "8px",
    padding: "1rem",
    backgroundColor: "#acacacff",
    border: "2px solid #000",
    overflowX: "auto",
    overflowY: "auto",
    children: "",
    gap: "1px"
  }
}
