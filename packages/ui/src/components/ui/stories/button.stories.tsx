import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "../button"
import { Mail } from "lucide-react"

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Button",
    variant: "default",
    size: "default",
  },
}

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
}

export const Destructive: Story = {
  args: {
    children: "Destructive",
    variant: "destructive",
  },
}

export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
  },
}

export const Ghost: Story = {
  args: {
    children: "Ghost",
    variant: "ghost",
  },
}

export const Link: Story = {
  args: {
    children: "Link Button",
    variant: "link",
  },
}

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Mail className="pd-mr-2 pd-h-4 pd-w-4" /> Login with Email
      </>
    ),
  },
}

export const IconOnly: Story = {
  args: {
    variant: "outline",
    size: "icon",
    children: <Mail className="pd-h-4 pd-w-4" />,
  },
}
