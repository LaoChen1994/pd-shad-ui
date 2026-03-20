"pd-use pd-client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "../../lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "pd-relative pd-h-4 pd-w-full pd-overflow-hidden pd-rounded-full pd-bg-secondary",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="pd-h-full pd-w-full pd-flex-1 pd-bg-primary pd-transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
