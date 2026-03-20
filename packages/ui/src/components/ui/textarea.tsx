import * as React from "react"

import { cn } from "pd-shad-ui/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "pd-flex pd-min-h-[80px] pd-w-full pd-rounded-md pd-border pd-border-input pd-bg-background pd-px-3 pd-py-2 pd-text-sm pd-ring-offset-background placeholder:pd-text-muted-foreground focus-visible:pd-outline-none focus-visible:pd-ring-2 focus-visible:pd-ring-ring focus-visible:pd-ring-offset-2 disabled:pd-cursor-not-allowed disabled:pd-opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
