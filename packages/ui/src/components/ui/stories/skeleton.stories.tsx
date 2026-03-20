import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react"
import { Skeleton } from "../skeleton"

const meta = {
  title: "UI/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="pd-flex pd-items-center pd-space-x-4">
      <Skeleton className="pd-h-12 pd-w-12 pd-rounded-full" />
      <div className="pd-space-y-2">
        <Skeleton className="pd-h-4 pd-w-[250px]" />
        <Skeleton className="pd-h-4 pd-w-[200px]" />
      </div>
    </div>
  ),
}

export const Card: Story = {
  render: () => (
    <div className="pd-flex pd-flex-col pd-space-y-3">
      <Skeleton className="pd-h-[125px] pd-w-[250px] pd-rounded-xl" />
      <div className="pd-space-y-2">
        <Skeleton className="pd-h-4 pd-w-[250px]" />
        <Skeleton className="pd-h-4 pd-w-[200px]" />
      </div>
    </div>
  ),
}
