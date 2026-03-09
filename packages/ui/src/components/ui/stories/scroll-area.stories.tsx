import type { Meta, StoryObj } from "@storybook/react"
import { ScrollArea } from "../scroll-area"
import { Separator } from "../separator"
import * as React from "react"

const meta: Meta<typeof ScrollArea> = {
  title: "Components/ScrollArea",
  component: ScrollArea,
}

export default meta
type Story = StoryObj<typeof ScrollArea>

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

export const Default: Story = {
  render: () => (
    <ScrollArea className="pd-h-72 pd-w-48 pd-rounded-md pd-border">
      <div className="pd-p-4">
        <h4 className="pd-mb-4 pd-text-sm pd-font-medium pd-leading-none">Tags</h4>
        {tags.map((tag) => (
          <React.Fragment key={tag}>
            <div className="pd-text-sm">
              {tag}
            </div>
            <Separator className="pd-my-2" />
          </React.Fragment>
        ))}
      </div>
    </ScrollArea>
  ),
}
