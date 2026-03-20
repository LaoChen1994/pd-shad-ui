"pd-use pd-client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "pd-shad-ui/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "pd-relative pd-flex pd-w-full pd-touch-none pd-select-none pd-items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="pd-relative pd-h-2 pd-w-full pd-grow pd-overflow-hidden pd-rounded-full pd-bg-secondary">
      <SliderPrimitive.Range className="pd-absolute pd-h-full pd-bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb 
      className="pd-block pd-h-5 pd-w-5 pd-rounded-full pd-border-2 pd-border-primary pd-bg-background pd-ring-offset-background pd-transition-colors focus-visible:pd-outline-none focus-visible:pd-ring-2 focus-visible:pd-ring-ring focus-visible:pd-ring-offset-2 disabled:pd-pointer-events-none disabled:pd-opacity-50" 
      aria-label={props["aria-label"]}
    />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
