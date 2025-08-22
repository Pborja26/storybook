import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Container from "./container";

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
    justify: {
      control: "select",
      options: ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"]
    },
    align: {
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
    maxheight: "",
    maxwidth: "",
    display: "flex",
    direction: "column",
    radius: "8px",
    padding: "1rem",
    bgColor: "#acacacff",
    border: "2px solid #000",
    style: {},
    overflowX: "auto",
    overflowY: "auto",
    children: "",
    gap: "1px"
  }
}
