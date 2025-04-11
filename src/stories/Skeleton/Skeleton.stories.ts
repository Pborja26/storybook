import type { Meta, StoryObj } from "@storybook/react";

import Skeleton from "./Skeleton";

const meta = {
    title: 'Example/Skeleton',
    component: Skeleton,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        height: "100px",
        width: "100px",
        maxHeight: "",
        maxWidth: "",
        minHeight: "",
        minWidth: "",
        radius: "8px"
    }
}
