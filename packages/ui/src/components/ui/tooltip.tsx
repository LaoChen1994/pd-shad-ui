import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "pd-shad-ui/lib/utils"

const TooltipProvider = TooltipPrimitive.Provider

const Tooltip = TooltipPrimitive.Root

const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "pd-z-50 pd-overflow-hidden pd-rounded-md pd-border pd-bg-popover pd-px-3 pd-py-1.5 pd-text-sm pd-text-popover-foreground pd-shadow-md pd-animate-in pd-fade-in-0 pd-zoom-in-95 data-[state=closed]:pd-animate-out data-[state=closed]:pd-fade-out-0 data-[state=closed]:pd-zoom-out-95 data-[side=bottom]:pd-slide-in-from-top-2 data-[side=left]:pd-slide-in-from-right-2 data-[side=right]:pd-slide-in-from-left-2 data-[side=top]:pd-slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
