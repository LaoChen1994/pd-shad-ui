import type { Meta, StoryObj } from "@storybook/react"
import { AspectRatio } from "../aspect-ratio"

const meta: Meta<typeof AspectRatio> = {
  title: "Components/AspectRatio",
  component: AspectRatio,
}

export default meta
type Story = StoryObj<typeof AspectRatio>

export const Default: Story = {
  args: {
    ratio: 16 / 9,
  },
  render: (args) => (
    <div className="pd-w-[450px]">
      <AspectRatio {...args} className="pd-bg-muted">
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcd27f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          className="pd-h-full pd-w-full pd-rounded-md pd-object-cover"
        />
      </AspectRatio>
    </div>
  ),
}

export const Square: Story = {
  args: {
    ratio: 1,
  },
  render: (args) => (
    <div className="pd-w-[300px]">
      <AspectRatio {...args} className="pd-bg-muted">
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcd27f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          className="pd-h-full pd-w-full pd-rounded-md pd-object-cover"
        />
      </AspectRatio>
    </div>
  ),
}
