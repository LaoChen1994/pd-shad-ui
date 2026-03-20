import * as React from "react"

import { cn } from "pd-shad-ui/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "pd-flex pd-h-10 pd-w-full pd-rounded-md pd-border pd-border-input pd-bg-background pd-px-3 pd-py-2 pd-text-sm pd-ring-offset-background file:pd-border-0 file:pd-bg-transparent file:pd-text-sm file:pd-font-medium placeholder:pd-text-muted-foreground focus-visible:pd-outline-none focus-visible:pd-ring-2 focus-visible:pd-ring-ring focus-visible:pd-ring-offset-2 disabled:pd-cursor-not-allowed disabled:pd-opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
