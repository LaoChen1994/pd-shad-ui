import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../popover"
import { Button } from "../button"
import { Input } from "../input"
import { Label } from "../label"

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
}

export default meta
type Story = StoryObj<typeof Popover>

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="pd-w-80">
        <div className="pd-grid pd-gap-4">
          <div className="pd-space-y-2">
            <h4 className="pd-font-medium pd-leading-none">Dimensions</h4>
            <p className="pd-text-sm pd-text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="pd-grid pd-gap-2">
            <div className="pd-grid pd-grid-cols-3 pd-items-center pd-gap-4">
              <Label htmlFor="width">Width</Label>
              <Input
                id="width"
                defaultValue="100%"
                className="pd-col-span-2 pd-h-8"
              />
            </div>
            <div className="pd-grid pd-grid-cols-3 pd-items-center pd-gap-4">
              <Label htmlFor="maxWidth">Max. width</Label>
              <Input
                id="maxWidth"
                defaultValue="300px"
                className="pd-col-span-2 pd-h-8"
              />
            </div>
            <div className="pd-grid pd-grid-cols-3 pd-items-center pd-gap-4">
              <Label htmlFor="height">Height</Label>
              <Input
                id="height"
                defaultValue="25px"
                className="pd-col-span-2 pd-h-8"
              />
            </div>
            <div className="pd-grid pd-grid-cols-3 pd-items-center pd-gap-4">
              <Label htmlFor="maxHeight">Max. height</Label>
              <Input
                id="maxHeight"
                defaultValue="none"
                className="pd-col-span-2 pd-h-8"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
}
