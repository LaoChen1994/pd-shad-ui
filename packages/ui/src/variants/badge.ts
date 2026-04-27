import { cva } from "class-variance-authority"

export const badgeVariants = cva(
  "pd-inline-flex pd-items-center pd-rounded-full pd-border pd-px-2.5 pd-py-0.5 pd-text-xs pd-font-semibold pd-transition-colors focus:pd-outline-none focus:pd-ring-2 focus:pd-ring-ring focus:pd-ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "pd-border-transparent pd-bg-primary pd-text-primary-foreground hover:pd-bg-primary/80",
        secondary:
          "pd-border-transparent pd-bg-secondary pd-text-secondary-foreground hover:pd-bg-secondary/80",
        destructive:
          "pd-border-transparent pd-bg-destructive pd-text-destructive-foreground hover:pd-bg-destructive/80",
        outline: "pd-text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)
