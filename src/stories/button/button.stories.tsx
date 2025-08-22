import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faTrash } from "@fortawesome/free-solid-svg-icons";
import Button from "./button";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
    args: { width: "fit-content" }
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    width: "fit-content",
    height: "fit-content",
    padding: "4px 8px",
    radius: "8px",
    color: "",
    hoverColor: "",
    bgColor: "",
    disabled: false,
    loading: false,
    onClick: () => {},
    children: "Primary Button"
  }
}

export const Secondary: Story = {
  args: {
    width: "",
    height: "",
    padding: "4px 8px",
    radius: "8px",
    color: "",
    hoverColor: "",
    bgColor: "",
    disabled: false,
    loading: false,
    onClick: () => {},
    children: "Secondary Button"
  }
}

export const Close: Story = {
  args: {
    width: "",
    height: "",
    padding: "6px 8px",
    radius: "50%",
    color: "#000",
    bgColor: "#fff",
    hoverColor: "#cbcbcb",
    disabled: false,
    loading: false,
    onClick: () => {},
    children: (
      <FontAwesomeIcon icon={faXmark} />
    )
  }
}

export const Delete: Story = {
  args: {
    width: "",
    height: "",
    padding: "8px",
    radius: "50%",
    color: "#fff",
    bgColor: "#d31313",
    hoverColor: "#ff0000",
    disabled: false,
    loading: false,
    onClick: () => {},
    children: (
      <FontAwesomeIcon icon={faTrash} />
    )
  }
}
