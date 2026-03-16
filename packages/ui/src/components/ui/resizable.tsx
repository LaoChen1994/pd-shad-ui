"pd-use pd-client"

import * as React from "react"
import { GripVertical } from "lucide-react"
import { Group, Panel, Separator } from "react-resizable-panels"

import { cn } from "@/lib/utils"

const ResizablePanelGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof Group>) => (
  <Group
    className={cn(
      "pd-flex pd-h-full pd-w-full data-[panel-group-direction=vertical]:flex-col",
      className
    )}
    {...props}
  />
)

const ResizablePanel = Panel

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof Separator> & {
  withHandle?: boolean
}) => (
  <Separator
    className={cn(
      "pd-relative pd-flex pd-w-px pd-items-center pd-justify-center pd-bg-border after:pd-absolute after:pd-inset-y-0 after:pd-left-1/2 after:pd-w-1 after:pd--translate-x-1/2 focus-visible:pd-outline-none focus-visible:pd-ring-1 focus-visible:pd-ring-ring focus-visible:pd-ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:inset-x-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className
    )}
    {...props}
  >
    {withHandle && (
      <div className="pd-z-10 pd-flex pd-h-4 pd-w-3 pd-items-center pd-justify-center pd-rounded-sm pd-border pd-bg-border">
        <GripVertical className="pd-h-2.5 pd-w-2.5" />
      </div>
    )}
  </Separator>
)

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
