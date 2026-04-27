import { cva } from "class-variance-authority"

export const sheetVariants = cva(
  "pd-fixed pd-z-50 pd-gap-4 pd-bg-background pd-p-6 pd-shadow-lg pd-transition pd-ease-in-out data-[state=open]:pd-animate-in data-[state=closed]:pd-animate-out data-[state=closed]:pd-duration-300 data-[state=open]:pd-duration-500",
  {
    variants: {
      side: {
        top: "pd-top-0 pd-left-0 pd-right-0 pd-border-b data-[state=closed]:pd-slide-out-to-top data-[state=open]:pd-slide-in-from-top",
        bottom:
          "pd-bottom-0 pd-left-0 pd-right-0 pd-border-t data-[state=closed]:pd-slide-out-to-bottom data-[state=open]:pd-slide-in-from-bottom",
        left: "pd-top-0 pd-left-0 pd-h-full pd-w-3/4 pd-border-r data-[state=closed]:pd-slide-out-to-left data-[state=open]:pd-slide-in-from-left sm:pd-max-w-sm",
        right:
          "pd-top-0 pd-right-0 pd-h-full pd-w-3/4 pd-border-l data-[state=closed]:pd-slide-out-to-right data-[state=open]:pd-slide-in-from-right sm:pd-max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
)
