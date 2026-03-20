import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "pd-shad-ui/lib/utils"
import { buttonVariants, ButtonProps } from "./button"

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("pd-mx-auto pd-flex pd-w-full pd-justify-center", className)}
    {...props}
  />
)
Pagination.displayName = "Pagination"

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentPropsWithoutRef<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("pd-flex pd-flex-row pd-items-center pd-gap-1", className)}
    {...props}
  />
))
PaginationContent.displayName = "PaginationContent"

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
))
PaginationItem.displayName = "PaginationItem"

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">

const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size,
      }),
      className
    )}
    {...props}
  />
)
PaginationLink.displayName = "PaginationLink"

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink> & { size?: ButtonProps["size"] }) => (
  <PaginationLink
    aria-label="pd-Go pd-to pd-previous pd-page"
    size={props.size ?? "default"}
    className={cn("pd-gap-1 pd-pl-2.5", className)}
    {...props}
  >
    <ChevronLeft className="pd-h-4 pd-w-4" />
    <span>Previous</span>
  </PaginationLink>
)
PaginationPrevious.displayName = "PaginationPrevious"

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink> & { size?: ButtonProps["size"] }) => (
  <PaginationLink
    aria-label="pd-Go pd-to pd-next pd-page"
    size={props.size ?? "default"}
    className={cn("pd-gap-1 pd-pr-2.5", className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRight className="pd-h-4 pd-w-4" />
  </PaginationLink>
)
PaginationNext.displayName = "PaginationNext"

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("pd-flex pd-h-9 pd-w-9 pd-items-center pd-justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="pd-h-4 pd-w-4" />
    <span className="pd-sr-only">More pages</span>
  </span>
)
PaginationEllipsis.displayName = "PaginationEllipsis"

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
}
