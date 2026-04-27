import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "pd-shad-ui/lib/utils"

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "pd-z-50 pd-w-72 pd-rounded-md pd-border pd-bg-popover pd-p-4 pd-text-popover-foreground pd-shadow-md pd-outline-none data-[state=open]:pd-animate-in data-[state=closed]:pd-animate-out data-[state=closed]:pd-fade-out-0 data-[state=open]:pd-fade-in-0 data-[state=closed]:pd-zoom-out-95 data-[state=open]:pd-zoom-in-95 data-[state=bottom]:pd-slide-in-from-top-2 data-[state=left]:pd-slide-in-from-right-2 data-[state=right]:pd-slide-in-from-left-2 data-[state=top]:pd-slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export { Popover, PopoverTrigger, PopoverContent }
