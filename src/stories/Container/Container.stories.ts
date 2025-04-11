import type { Meta, StoryObj } from "@storybook/react";
import { fn } from '@storybook/test';
import Container from "./Container";


const meta = {
    title: 'Example/Container',
    component: Container,
    parameters: {
        layout: 'centered',
        args: { width: "100%" }
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: { 
        width: "", 
        height: "", 
        maxHeight: "", 
        maxWidth: "",
        border: "",
        padding: "",
        radius: "",
        gap: "",
        overflowX: false,
        overflowY: false
    },
}
