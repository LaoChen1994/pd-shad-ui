import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import { Check, CreditCard, Settings, User } from "lucide-vue-next";
import { Button } from "../components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "../components/ui/command";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "../components/ui/context-menu";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "../components/ui/menubar";

const meta = {
  title: "Vue/Menus",
  parameters: {
    layout: "padded",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const DropdownMenuPreview: Story = {
  render: () => ({
    components: {
      Button,
      DropdownMenu,
      DropdownMenuCheckboxItem,
      DropdownMenuContent,
      DropdownMenuItem,
      DropdownMenuLabel,
      DropdownMenuSeparator,
      DropdownMenuTrigger,
    },
    setup() {
      const showStatusBar = ref(true);
      return { showStatusBar };
    },
    template: `
      <DropdownMenu>
        <DropdownMenuTrigger :as-child="true">
          <Button variant="outline">Open menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="pd-w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <User class="pd-mr-2 pd-h-4 pd-w-4" />
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard class="pd-mr-2 pd-h-4 pd-w-4" />
            Billing
          </DropdownMenuItem>
          <DropdownMenuCheckboxItem v-model:checked="showStatusBar">
            Show status bar
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    `,
  }),
};

export const ContextMenuPreview: Story = {
  render: () => ({
    components: {
      ContextMenu,
      ContextMenuContent,
      ContextMenuItem,
      ContextMenuSeparator,
      ContextMenuTrigger,
    },
    template: `
      <ContextMenu>
        <ContextMenuTrigger class="pd-flex pd-h-[180px] pd-w-[320px] pd-items-center pd-justify-center pd-rounded-md pd-border pd-border-dashed pd-text-sm pd-text-muted-foreground">
          Right click this panel
        </ContextMenuTrigger>
        <ContextMenuContent class="pd-w-52">
          <ContextMenuItem inset>Open in new tab</ContextMenuItem>
          <ContextMenuItem inset>Duplicate</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem inset>Delete section</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    `,
  }),
};

export const MenubarPreview: Story = {
  render: () => ({
    components: {
      Menubar,
      MenubarContent,
      MenubarItem,
      MenubarMenu,
      MenubarSeparator,
      MenubarTrigger,
    },
    template: `
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New tab</MenubarItem>
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Exit</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Undo</MenubarItem>
            <MenubarItem>Redo</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    `,
  }),
};

export const CommandPreview: Story = {
  render: () => ({
    components: {
      Check,
      Command,
      CommandEmpty,
      CommandGroup,
      CommandInput,
      CommandItem,
      CommandList,
      CommandSeparator,
      CommandShortcut,
      Settings,
      User,
    },
    template: `
      <Command class="pd-w-[480px] pd-rounded-lg pd-border pd-shadow-md">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem value="profile">
              <User class="pd-mr-2 pd-h-4 pd-w-4" />
              <span>Profile</span>
            </CommandItem>
            <CommandItem value="updates">
              <Check class="pd-mr-2 pd-h-4 pd-w-4" />
              <span>Release checklist</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem value="general">
              <Settings class="pd-mr-2 pd-h-4 pd-w-4" />
              <span>General</span>
              <CommandShortcut>⌘G</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    `,
  }),
};
