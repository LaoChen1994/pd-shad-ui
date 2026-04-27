import type { Meta, StoryObj } from "@storybook/vue3";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../components/ui/navigation-menu";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../components/ui/pagination";

const meta = {
  title: "Vue/Navigation",
  parameters: {
    layout: "padded",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const BreadcrumbPreview: Story = {
  render: () => ({
    components: {
      Breadcrumb,
      BreadcrumbEllipsis,
      BreadcrumbItem,
      BreadcrumbLink,
      BreadcrumbList,
      BreadcrumbPage,
      BreadcrumbSeparator,
    },
    template: `
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Workspace</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/packages">Packages</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbEllipsis />
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>pd-shad-ui</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    `,
  }),
};

export const PaginationPreview: Story = {
  render: () => ({
    components: {
      Pagination,
      PaginationContent,
      PaginationEllipsis,
      PaginationItem,
      PaginationLink,
      PaginationNext,
      PaginationPrevious,
    },
    template: `
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" :is-active="true">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    `,
  }),
};

export const NavigationMenuPreview: Story = {
  render: () => ({
    components: {
      NavigationMenu,
      NavigationMenuContent,
      NavigationMenuItem,
      NavigationMenuLink,
      NavigationMenuList,
      NavigationMenuTrigger,
    },
    setup() {
      const triggerClass = navigationMenuTriggerStyle();
      const items = [
        {
          title: "Alert Dialog",
          description: "Interrupt the flow when a decision needs explicit confirmation.",
        },
        {
          title: "Hover Card",
          description: "Offer richer previews without leaving the current context.",
        },
        {
          title: "Scroll Area",
          description: "Keep dense content readable while preserving custom styling.",
        },
        {
          title: "Tooltip",
          description: "Surface short helper text without crowding the layout.",
        },
      ];
      return { items, triggerClass };
    },
    template: `
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul class="pd-grid pd-gap-3 pd-p-6 md:pd-w-[420px]">
                <li class="pd-rounded-md pd-bg-muted pd-p-4">
                  <div class="pd-mb-2 pd-text-lg pd-font-medium">pd-ui</div>
                  <p class="pd-text-sm pd-leading-relaxed pd-text-muted-foreground">
                    Shared components for React and Vue with the same tokens, states, and story coverage.
                  </p>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul class="pd-grid pd-w-[520px] pd-gap-3 pd-p-4 md:pd-grid-cols-2">
                <li v-for="item in items" :key="item.title">
                  <NavigationMenuLink as-child>
                    <a
                      href="#"
                      class="pd-block pd-space-y-1 pd-rounded-md pd-p-3 pd-no-underline pd-outline-none pd-transition-colors hover:pd-bg-accent hover:pd-text-accent-foreground focus:pd-bg-accent focus:pd-text-accent-foreground"
                    >
                      <div class="pd-text-sm pd-font-medium">{{ item.title }}</div>
                      <p class="pd-line-clamp-2 pd-text-sm pd-leading-snug pd-text-muted-foreground">
                        {{ item.description }}
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#" :class="triggerClass">Documentation</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    `,
  }),
};
