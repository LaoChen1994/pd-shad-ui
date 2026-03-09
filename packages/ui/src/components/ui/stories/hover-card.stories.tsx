import type { Meta, StoryObj } from "@storybook/react"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../hover-card"
import { Avatar, AvatarFallback, AvatarImage } from "../avatar"
import { CalendarDays } from "lucide-react"
import { Button } from "../button"

const meta: Meta<typeof HoverCard> = {
  title: "Components/HoverCard",
  component: HoverCard,
}

export default meta
type Story = StoryObj<typeof HoverCard>

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent className="pd-w-80">
        <div className="pd-flex pd-justify-between pd-space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="pd-space-y-1">
            <h4 className="pd-text-sm pd-font-semibold">@nextjs</h4>
            <p className="pd-text-sm">
              The React Framework – created and maintained by @vercel.
            </p>
            <div className="pd-flex pd-items-center pd-pt-2">
              <CalendarDays className="pd-mr-2 pd-h-4 pd-w-4 pd-opacity-70" />{" "}
              <span className="pd-text-xs pd-text-muted-foreground">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}
