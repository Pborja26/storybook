import type { Meta, StoryObj } from "@storybook/react";

import Select from "./Select";

const meta = {
    title: 'Example/Select',
    component: Select,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: "",
        required: false,
        isOpen: false,
        isLoading: false,
        value: ""
    }
}
