import type { Meta, StoryObj } from "@storybook/react"
import { Switch } from "../switch"
import { Label } from "../label"

const meta = {
  title: "UI/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="pd-flex pd-items-center pd-space-x-2">
      <Switch id="pd-airplane-mode" />
      <Label htmlFor="pd-airplane-mode">Airplane Mode</Label>
    </div>
  ),
}

export const Checked: Story = {
  render: () => (
    <div className="pd-flex pd-items-center pd-space-x-2">
      <Switch id="pd-airplane-mode-checked" defaultChecked />
      <Label htmlFor="pd-airplane-mode-checked">Airplane Mode</Label>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="pd-flex pd-items-center pd-space-x-2">
      <Switch id="pd-airplane-mode-disabled" disabled />
      <Label htmlFor="pd-airplane-mode-disabled">Airplane Mode</Label>
    </div>
  ),
}
