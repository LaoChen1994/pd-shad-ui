import type { Meta, StoryObj } from "@storybook/react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../dialog"
import { Button } from "../button"
import { Input } from "../input"
import { Label } from "../label"

const meta = {
  title: "UI/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="pd-sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
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
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}
