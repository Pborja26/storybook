import type { Meta, StoryObj } from '@storybook/react'

import Label from './Label'

const meta = {
    title: 'Example/Label',
    component: Label,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        fontWeight: {
            control: {
                type: "select"
            },
            options: ["normal", "bold", "bolder", "lighter", 100, 200, 300, 400, 500, 600, 700, 800, 900]
        },
    }
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: ""
    }
}
