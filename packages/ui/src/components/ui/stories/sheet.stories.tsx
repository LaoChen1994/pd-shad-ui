import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../sheet"
import { Button } from "../button"
import { Input } from "../input"
import { Label } from "../label"

const meta = {
  title: "UI/Sheet",
  component: Sheet,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Sheet>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="pd-grid pd-gap-4 pd-py-4">
          <div className="pd-grid pd-grid-cols-4 pd-items-center pd-gap-4">
            <Label htmlFor="name" className="pd-text-right">
              Name
            </Label>
            <Input id="name" defaultValue="Pedro Duarte" className="pd-col-span-3" />
          </div>
          <div className="pd-grid pd-grid-cols-4 pd-items-center pd-gap-4">
            <Label htmlFor="username" className="pd-text-right">
              Username
            </Label>
            <Input id="username" defaultValue="@peduarte" className="pd-col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <Button type="submit">Save changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}

export const SideBySide: Story = {
  render: () => (
    <div className="pd-grid pd-grid-cols-2 pd-gap-2">
      {["top", "bottom", "left", "right"].map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="outline" className="pd-capitalize">{side}</Button>
          </SheetTrigger>
          <SheetContent side={side as "top" | "bottom" | "left" | "right"}>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <div className="pd-grid pd-gap-4 pd-py-4">
              <div className="pd-grid pd-grid-cols-4 pd-items-center pd-gap-4">
                <Label htmlFor="name" className="pd-text-right">
                  Name
                </Label>
                <Input id="name" defaultValue="Pedro Duarte" className="pd-col-span-3" />
              </div>
            </div>
            <SheetFooter>
              <Button type="submit">Save changes</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  ),
}
