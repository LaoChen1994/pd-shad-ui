import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react"
import { Separator } from "../separator"

const meta: Meta<typeof Separator> = {
  title: "Components/Separator",
  component: Separator,
}

export default meta
type Story = StoryObj<typeof Separator>

export const Default: Story = {
  render: () => (
    <div>
      <div className="pd-space-y-1">
        <h4 className="pd-text-sm pd-font-medium pd-leading-none">Radix Primitives</h4>
        <p className="pd-text-sm pd-text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="pd-my-4" />
      <div className="pd-flex pd-h-5 pd-items-center pd-space-x-4 pd-text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  ),
}
