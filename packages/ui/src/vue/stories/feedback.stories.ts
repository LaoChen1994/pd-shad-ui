import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import { toast } from "vue-sonner";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../components/ui/alert-dialog";
import { Button } from "../components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../components/ui/hover-card";
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "../components/ui/sheet";
import { Toaster } from "../components/ui/sonner";

const meta = {
  title: "Vue/Feedback",
  parameters: {
    layout: "centered",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const AlertDialogPreview: Story = {
  render: () => ({
    components: {
      AlertDialog,
      AlertDialogAction,
      AlertDialogCancel,
      AlertDialogContent,
      AlertDialogDescription,
      AlertDialogFooter,
      AlertDialogHeader,
      AlertDialogTitle,
      AlertDialogTrigger,
      Button,
    },
    template: `
      <AlertDialog>
        <AlertDialogTrigger :as-child="true">
          <Button variant="destructive">Delete release notes</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. It will permanently remove this draft from the workspace.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    `,
  }),
};

export const HoverCardPreview: Story = {
  render: () => ({
    components: { HoverCard, HoverCardContent, HoverCardTrigger },
    template: `
      <HoverCard>
        <HoverCardTrigger as-child>
          <a href="#" class="pd-text-sm pd-font-medium pd-underline pd-underline-offset-4">
            @pd-ui
          </a>
        </HoverCardTrigger>
        <HoverCardContent class="pd-w-80">
          <div class="pd-space-y-2">
            <h4 class="pd-text-sm pd-font-semibold">Design system workspace</h4>
            <p class="pd-text-sm pd-text-muted-foreground">
              Shared React and Vue components, kept aligned with one set of variants and Storybook previews.
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>
    `,
  }),
};

export const SheetPreview: Story = {
  render: () => ({
    components: {
      Button,
      Sheet,
      SheetContent,
      SheetDescription,
      SheetFooter,
      SheetHeader,
      SheetTitle,
      SheetTrigger,
    },
    template: `
      <Sheet>
        <SheetTrigger :as-child="true">
          <Button variant="outline">Open sheet</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Review summary</SheetTitle>
            <SheetDescription>
              Quick notes from the current Vue parity pass.
            </SheetDescription>
          </SheetHeader>
          <div class="pd-grid pd-gap-3 pd-py-6 pd-text-sm pd-text-muted-foreground">
            <p>Client directives have been normalized.</p>
            <p>Shared variants now drive more Vue implementations.</p>
            <p>Story coverage is being expanded component by component.</p>
          </div>
          <SheetFooter>
            <Button>Save changes</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    `,
  }),
};

export const SonnerPreview: Story = {
  render: () => ({
    components: { Button, Toaster },
    setup() {
      const showToast = () => {
        toast("Event has been created", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Undo",
            onClick: () => undefined,
          },
        });
      };

      return { showToast };
    },
    template: `
      <div>
        <Toaster />
        <Button variant="outline" @click="showToast">Show toast</Button>
      </div>
    `,
  }),
};
