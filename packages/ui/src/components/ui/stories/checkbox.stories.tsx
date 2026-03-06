import type { Meta, StoryObj } from "@storybook/react"
import { Checkbox } from "../checkbox"
import { Label } from "../label"

const meta = {
  title: "UI/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="pd-flex pd-items-center pd-space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
}

export const Checked: Story = {
  render: () => (
    <div className="pd-flex pd-items-center pd-space-x-2">
      <Checkbox id="terms2" defaultChecked />
      <Label htmlFor="terms2">Accept terms and conditions</Label>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="pd-flex pd-items-center pd-space-x-2">
      <Checkbox id="terms3" disabled />
      <Label htmlFor="terms3">Accept terms and conditions</Label>
    </div>
  ),
}
