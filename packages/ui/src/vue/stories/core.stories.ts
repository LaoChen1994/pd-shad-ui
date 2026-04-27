import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

const meta = {
  title: "Vue/Core",
  parameters: {
    layout: "padded",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonVariants: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="pd-flex pd-flex-wrap pd-gap-3">
        <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
      </div>
    `,
  }),
};

export const Inputs: Story = {
  render: () => ({
    components: { Input },
    setup() {
      const email = ref("team@pd-ui.dev");
      return { email };
    },
    template: `
      <div class="pd-grid pd-w-[360px] pd-gap-4">
        <Input v-model="email" placeholder="Email address" />
        <Input type="password" placeholder="Password" />
      </div>
    `,
  }),
};

export const SelectMenu: Story = {
  render: () => ({
    components: {
      Select,
      SelectContent,
      SelectGroup,
      SelectItem,
      SelectLabel,
      SelectTrigger,
      SelectValue,
    },
    setup() {
      const timezone = ref("asia/shanghai");
      return { timezone };
    },
    template: `
      <div class="pd-w-[320px]">
        <Select v-model="timezone">
          <SelectTrigger>
            <SelectValue placeholder="Select a timezone" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Asia</SelectLabel>
              <SelectItem value="asia/shanghai">Shanghai</SelectItem>
              <SelectItem value="asia/tokyo">Tokyo</SelectItem>
              <SelectItem value="asia/seoul">Seoul</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    `,
  }),
};

export const TabsPreview: Story = {
  render: () => ({
    components: { Tabs, TabsContent, TabsList, TabsTrigger },
    template: `
      <Tabs default-value="account" class="pd-w-[420px]">
        <TabsList class="pd-grid pd-w-full pd-grid-cols-2">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        <TabsContent value="account" class="pd-rounded-md pd-border pd-p-4">
          <p class="pd-text-sm pd-text-muted-foreground">Update your profile and public details.</p>
        </TabsContent>
        <TabsContent value="notifications" class="pd-rounded-md pd-border pd-p-4">
          <p class="pd-text-sm pd-text-muted-foreground">Control alerts, emails, and team digests.</p>
        </TabsContent>
      </Tabs>
    `,
  }),
};

export const AccordionPreview: Story = {
  render: () => ({
    components: { Accordion, AccordionContent, AccordionItem, AccordionTrigger },
    template: `
      <Accordion type="single" collapsible class="pd-w-[520px]">
        <AccordionItem value="item-1">
          <AccordionTrigger>Design tokens</AccordionTrigger>
          <AccordionContent>Shared spacing, color, and motion rules now stay aligned across React and Vue.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Accessibility</AccordionTrigger>
          <AccordionContent>State styles and aria links are now consistent, especially in form primitives.</AccordionContent>
        </AccordionItem>
      </Accordion>
    `,
  }),
};

export const TablePreview: Story = {
  render: () => ({
    components: { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow },
    template: `
      <Table class="pd-w-[640px]">
        <TableCaption>Latest package review status</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Package</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Owner</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>pd-shad-ui</TableCell>
            <TableCell>Ready</TableCell>
            <TableCell>Design System</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>pd-markdown-ui</TableCell>
            <TableCell>Reviewing</TableCell>
            <TableCell>Docs Team</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    `,
  }),
};
