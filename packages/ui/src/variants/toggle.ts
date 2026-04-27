import { cva } from "class-variance-authority"

export const toggleVariants = cva(
  "pd-inline-flex pd-items-center pd-justify-center pd-rounded-md pd-text-sm pd-font-medium pd-ring-offset-background pd-transition-colors hover:pd-bg-muted hover:pd-text-muted-foreground focus-visible:pd-outline-none focus-visible:pd-ring-2 focus-visible:pd-ring-ring focus-visible:pd-ring-offset-2 disabled:pd-pointer-events-none disabled:pd-opacity-50 data-[state=on]:pd-bg-accent data-[state=on]:pd-text-accent-foreground",
  {
    variants: {
      variant: {
        default: "pd-bg-transparent",
        outline:
          "pd-border pd-border-input pd-bg-transparent hover:pd-bg-accent hover:pd-text-accent-foreground",
      },
      size: {
        default: "pd-h-10 pd-px-3",
        sm: "pd-h-9 pd-px-2.5",
        lg: "pd-h-11 pd-px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)
