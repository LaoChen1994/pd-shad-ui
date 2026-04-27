import { cva } from "class-variance-authority"

export const buttonVariants = cva(
  "pd-inline-flex pd-items-center pd-justify-center pd-whitespace-nowrap pd-rounded-md pd-text-sm pd-font-medium pd-ring-offset-background pd-transition-colors focus-visible:pd-outline-none focus-visible:pd-ring-2 focus-visible:pd-ring-ring focus-visible:pd-ring-offset-2 disabled:pd-pointer-events-none disabled:pd-opacity-50",
  {
    variants: {
      variant: {
        default: "pd-bg-primary pd-text-primary-foreground hover:pd-bg-primary/90",
        destructive:
          "pd-bg-destructive pd-text-destructive-foreground hover:pd-bg-destructive/90",
        outline:
          "pd-border pd-border-input pd-bg-background hover:pd-bg-accent hover:pd-text-accent-foreground",
        secondary:
          "pd-bg-secondary pd-text-secondary-foreground hover:pd-bg-secondary/80",
        ghost: "hover:pd-bg-accent hover:pd-text-accent-foreground",
        link: "pd-text-primary pd-underline-offset-4 hover:pd-underline",
      },
      size: {
        default: "pd-h-10 pd-px-4 pd-py-2",
        sm: "pd-h-9 pd-rounded-md pd-px-3",
        lg: "pd-h-11 pd-rounded-md pd-px-8",
        icon: "pd-h-10 pd-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)
