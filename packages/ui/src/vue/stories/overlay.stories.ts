import type { Meta, StoryObj } from "@storybook/vue3";
import { Button } from "../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../components/ui/popover";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../components/ui/tooltip";

const meta = {
  title: "Vue/Overlay",
  parameters: {
    layout: "centered",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const DialogPreview: Story = {
  render: () => ({
    components: {
      Button,
      Dialog,
      DialogContent,
      DialogDescription,
      DialogFooter,
      DialogHeader,
      DialogTitle,
      DialogTrigger,
      Input,
      Label,
    },
    template: `
      <Dialog>
        <DialogTrigger :as-child="true">
          <Button variant="outline">Edit profile</Button>
        </DialogTrigger>
        <DialogContent class="sm:pd-max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>Make updates here and close when you're done.</DialogDescription>
          </DialogHeader>
          <div class="pd-grid pd-gap-4 pd-py-4">
            <div class="pd-grid pd-gap-2">
              <Label for="name">Name</Label>
              <Input id="name" model-value="Pidan" />
            </div>
            <div class="pd-grid pd-gap-2">
              <Label for="username">Username</Label>
              <Input id="username" model-value="@pd-ui" />
            </div>
          </div>
          <DialogFooter>
            <Button>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    `,
  }),
};

export const PopoverPreview: Story = {
  render: () => ({
    components: { Button, Input, Label, Popover, PopoverContent, PopoverTrigger },
    template: `
      <Popover>
        <PopoverTrigger :as-child="true">
          <Button variant="outline">Open settings</Button>
        </PopoverTrigger>
        <PopoverContent class="pd-w-80">
          <div class="pd-grid pd-gap-4">
            <div class="pd-space-y-2">
              <h4 class="pd-font-medium pd-leading-none">Dimensions</h4>
              <p class="pd-text-sm pd-text-muted-foreground">Adjust the spacing for this panel.</p>
            </div>
            <div class="pd-grid pd-gap-2">
              <Label for="width">Width</Label>
              <Input id="width" model-value="100%" />
            </div>
          </div>
        </PopoverContent>
      </Popover>
    `,
  }),
};

export const TooltipPreview: Story = {
  render: () => ({
    components: { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger },
    template: `
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger :as-child="true">
            <Button variant="secondary">Hover me</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Vue tooltip content is wired and themed.</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    `,
  }),
};
