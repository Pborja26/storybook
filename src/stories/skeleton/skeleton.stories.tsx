import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Skeleton from "./skeleton";

const meta = {
  title: "Example/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story ={
  args: {
    width: "50px",
    height: "50px",
    radius: "8px"
  }
}
