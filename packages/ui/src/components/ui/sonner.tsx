"use client"

import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="pd-toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group pd-toast group-[.toaster]:pd-bg-background group-[.toaster]:pd-text-foreground group-[.toaster]:pd-border-border group-[.toaster]:pd-shadow-lg",
          description: "group-[.toast]:pd-text-muted-foreground",
          actionButton:
            "group-[.toast]:pd-bg-primary group-[.toast]:pd-text-primary-foreground",
          cancelButton:
            "group-[.toast]:pd-bg-muted group-[.toast]:pd-text-muted-foreground",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
