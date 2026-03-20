import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react"
import { Progress } from "../progress"

const meta = {
  title: "UI/Progress",
  component: Progress,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100 },
    },
  },
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: 33,
    className: "w-[300px]",
  },
}

export const Complete: Story = {
  args: {
    value: 100,
    className: "w-[300px]",
  },
}

export const Empty: Story = {
  args: {
    value: 0,
    className: "w-[300px]",
  },
}
