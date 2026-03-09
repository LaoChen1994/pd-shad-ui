import type { Meta, StoryObj } from "@storybook/react"
import { Toggle } from "../toggle"
import { Bold } from "lucide-react"

const meta: Meta<typeof Toggle> = {
  title: "Components/Toggle",
  component: Toggle,
}

export default meta
type Story = StoryObj<typeof Toggle>

export const Default: Story = {
  render: (args) => (
    <Toggle {...args} aria-label="Toggle bold">
      <Bold className="pd-h-4 pd-w-4" />
    </Toggle>
  ),
}

export const Outline: Story = {
  args: {
    variant: "outline",
  },
  render: (args) => (
    <Toggle {...args} aria-label="Toggle bold">
      <Bold className="pd-h-4 pd-w-4" />
    </Toggle>
  ),
}
