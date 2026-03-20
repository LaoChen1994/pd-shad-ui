import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../navigation-menu"
import { cn } from "../../../lib/utils"
import * as React from "react"

const meta: Meta<typeof NavigationMenu> = {
  title: "Components/NavigationMenu",
  component: NavigationMenu,
}

export default meta
type Story = StoryObj<typeof NavigationMenu>

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Augments native scroll functionality for custom, cross-browser styling.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export const Default: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="pd-grid pd-gap-3 pd-p-6 md:pd-w-[400px] lg:pd-w-[500px] lg:pd-grid-cols-[.75fr_1fr]">
              <li className="pd-row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="pd-flex pd-h-full pd-w-full pd-select-none pd-flex-col pd-justify-end pd-rounded-md pd-bg-gradient-to-b pd-from-muted/50 pd-to-muted pd-p-6 pd-no-underline pd-outline-none focus:pd-shadow-md"
                    href="/"
                  >
                    <div className="pd-mb-2 pd-mt-4 pd-text-lg pd-font-medium">
                      shadcn/ui
                    </div>
                    <p className="pd-text-sm pd-leading-tight pd-text-muted-foreground">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="pd-grid pd-w-[400px] pd-gap-3 pd-p-4 md:pd-w-[500px] md:pd-grid-cols-2 lg:pd-w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/docs" className={navigationMenuTriggerStyle()}>
            Documentation
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "pd-block pd-select-none pd-space-y-1 pd-rounded-md pd-p-3 pd-leading-none pd-no-underline pd-outline-none pd-transition-colors hover:pd-bg-accent hover:pd-text-accent-foreground focus:pd-bg-accent focus:pd-text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="pd-text-sm pd-font-medium pd-leading-none">{title}</div>
          <p className="pd-line-clamp-2 pd-text-sm pd-leading-snug pd-text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
