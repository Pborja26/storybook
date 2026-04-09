import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Container from "./Container";
import * as typeValues from "../utils/typeValues";

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
      options: typeValues.CursorValues,
      description: "CSS cursor values"
    },
    overflowX: {
      control: "select",
      options: typeValues.OverflowValues
    },
    overflowY: {
      control: "select",
      options: typeValues.OverflowValues
    },
    display: {
      control: "select",
      options: typeValues.DisplayValues
    },
    direction: {
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
