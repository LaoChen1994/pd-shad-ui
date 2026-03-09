import type { Meta, StoryObj } from "@storybook/react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../carousel"
import { Card, CardContent } from "../card"

const meta: Meta<typeof Carousel> = {
  title: "Components/Carousel",
  component: Carousel,
}

export default meta
type Story = StoryObj<typeof Carousel>

export const Default: Story = {
  render: () => (
    <div className="pd-px-12">
      <Carousel className="pd-w-full pd-max-w-xs">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="pd-p-1">
                <Card>
                  <CardContent className="pd-flex pd-aspect-square pd-items-center pd-justify-center pd-p-6">
                    <span className="pd-text-4xl pd-font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
}
