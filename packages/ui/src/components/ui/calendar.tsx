import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("pd-p-3", className)}
      classNames={{
        months: "pd-flex pd-flex-col sm:pd-flex-row pd-space-y-4 sm:pd-space-x-4 sm:pd-space-y-0",
        month: "pd-space-y-4",
        caption: "pd-flex pd-justify-center pd-pt-1 pd-relative pd-items-center",
        caption_label: "pd-text-sm pd-font-medium",
        nav: "pd-space-x-1 pd-flex pd-items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "pd-h-7 pd-w-7 pd-bg-transparent pd-p-0 pd-opacity-50 hover:pd-opacity-100"
        ),
        nav_button_previous: "pd-absolute pd-left-1",
        nav_button_next: "pd-absolute pd-right-1",
        table: "pd-w-full pd-border-collapse pd-space-y-1",
        head_row: "pd-flex",
        head_cell:
          "pd-text-muted-foreground pd-rounded-md pd-w-9 pd-font-normal pd-text-[0.8rem]",
        row: "pd-flex pd-w-full pd-mt-2",
        cell: "pd-h-9 pd-w-9 pd-text-center pd-text-sm pd-p-0 pd-relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:pd-rounded-l-md last:[&:has([aria-selected])]:pd-rounded-r-md focus-within:pd-relative focus-within:pd-z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "pd-h-9 pd-w-9 pd-p-0 pd-font-normal aria-selected:pd-opacity-100"
        ),
        day_range_end: "pd-day-range-end",
        day_selected:
          "pd-bg-primary pd-text-primary-foreground hover:pd-bg-primary hover:pd-text-primary-foreground focus:pd-bg-primary focus:pd-text-primary-foreground",
        day_today: "pd-bg-accent pd-text-accent-foreground",
        day_outside:
          "pd-day-outside pd-text-muted-foreground aria-selected:pd-bg-accent/50 aria-selected:pd-text-muted-foreground",
        day_disabled: "pd-text-muted-foreground pd-opacity-50",
        day_range_middle:
          "aria-selected:pd-bg-accent aria-selected:pd-text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: (props) => {
          if (props.orientation === "left") {
            return <ChevronLeft className="pd-h-4 pd-w-4" />
          }
          return <ChevronRight className="pd-h-4 pd-w-4" />
        },
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
