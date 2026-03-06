import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("pd-animate-pulse pd-rounded-md pd-bg-muted", className)}
      {...props}
    />
  )
}

export { Skeleton }
