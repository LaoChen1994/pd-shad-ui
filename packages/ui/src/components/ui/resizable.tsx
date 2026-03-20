"use client"

import * as React from "react"
import { Group, Panel, Separator } from "react-resizable-panels"
import { GripVertical } from "lucide-react"

import { cn } from "../../lib/utils"

const ResizablePanelGroup = ({
  className,
  ...props
}: any) => (
  <Group
    className={cn(
      "pd-flex pd-h-full pd-w-full data-[panel-group-direction=vertical]:pd-flex-col",
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
}: any) => (
  <Separator
    className={cn(
      "pd-relative pd-flex pd-w-px pd-items-center pd-justify-center pd-bg-border after:pd-absolute after:pd-inset-y-0 after:pd-left-1/2 after:pd-w-1 after:pd--translate-x-1/2 focus-visible:pd-outline-none focus-visible:pd-ring-1 focus-visible:pd-ring-ring focus-visible:pd-ring-offset-1 data-[panel-group-direction=vertical]:pd-h-px data-[panel-group-direction=vertical]:pd-w-full data-[panel-group-direction=vertical]:after:pd-inset-x-0 data-[panel-group-direction=vertical]:after:pd-h-1 data-[panel-group-direction=vertical]:after:pd-translate-y-1/2 data-[panel-group-direction=vertical]:after:pd-translate-x-0 [&[data-panel-group-direction=vertical]>div]:pd-rotate-90",
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
