import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react"
import { Input } from "../input"
import { Label } from "../label"

const meta = {
  title: "UI/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "file"],
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    type: "email",
    placeholder: "Email",
    className: "w-[300px]",
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    type: "email",
    placeholder: "Email",
    className: "w-[300px]",
  },
}

export const WithLabel: Story = {
  render: (args) => (
    <div className="pd-grid pd-w-[300px] pd-w-full pd-max-w-sm pd-items-center pd-gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="Email" {...args} />
    </div>
  ),
}

export const File: Story = {
  render: (args) => (
    <div className="pd-grid pd-w-[300px] pd-w-full pd-max-w-sm pd-items-center pd-gap-1.5">
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" {...args} />
    </div>
  ),
}
