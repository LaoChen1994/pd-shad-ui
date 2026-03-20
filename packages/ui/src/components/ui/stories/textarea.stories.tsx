import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react"
import { Textarea } from "../textarea"

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
}

export default meta
type Story = StoryObj<typeof Textarea>

export const Default: Story = {
  args: {
    placeholder: "Type your message here.",
  },
}

export const Disabled: Story = {
  args: {
    placeholder: "Type your message here.",
    disabled: true,
  },
}
