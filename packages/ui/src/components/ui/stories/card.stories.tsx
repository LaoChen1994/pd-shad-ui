import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../card"
import { Button } from "../button"
import { Input } from "../input"
import { Label } from "../label"

const meta = {
  title: "UI/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Card className="pd-w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="pd-grid pd-w-full pd-items-center pd-gap-4">
            <div className="pd-flex pd-flex-col pd-space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="pd-Name pd-of pd-your pd-project" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="pd-flex pd-justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  ),
}

export const Simple: Story = {
  render: () => (
    <Card className="pd-w-[350px]">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent className="pd-grid pd-gap-4">
        <div className="pd-flex pd-items-center pd-space-x-4 pd-rounded-md pd-border pd-p-4">
          <div className="pd-flex-1 pd-space-y-1">
            <p className="pd-text-sm pd-font-medium pd-leading-none">
              Push Notifications
            </p>
            <p className="pd-text-sm pd-text-muted-foreground">
              Send notifications to device.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  ),
}
