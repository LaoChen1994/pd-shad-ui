import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import { AspectRatio } from "../components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { Separator } from "../components/ui/separator";
import { Skeleton } from "../components/ui/skeleton";

const meta = {
  title: "Vue/Display",
  parameters: {
    layout: "padded",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const BadgePreview: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div class="pd-flex pd-flex-wrap pd-gap-3">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="destructive">Destructive</Badge>
      </div>
    `,
  }),
};

export const AvatarPreview: Story = {
  render: () => ({
    components: { Avatar, AvatarFallback, AvatarImage },
    template: `
      <div class="pd-flex pd-items-center pd-gap-4">
        <Avatar class="pd-h-12 pd-w-12">
          <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar class="pd-h-12 pd-w-12">
          <AvatarFallback>PD</AvatarFallback>
        </Avatar>
      </div>
    `,
  }),
};

export const CardPreview: Story = {
  render: () => ({
    components: { Badge, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle },
    template: `
      <Card class="pd-w-[360px]">
        <CardHeader>
          <div class="pd-flex pd-items-center pd-justify-between">
            <div class="pd-space-y-1">
              <CardTitle>Design review</CardTitle>
              <CardDescription>Keep React and Vue components visually aligned.</CardDescription>
            </div>
            <Badge variant="secondary">In Sync</Badge>
          </div>
        </CardHeader>
        <CardContent class="pd-text-sm pd-text-muted-foreground">
          The shared variants now drive both implementations, which keeps states and spacing much closer over time.
        </CardContent>
        <CardFooter class="pd-text-xs pd-text-muted-foreground">
          Updated in this Storybook pass
        </CardFooter>
      </Card>
    `,
  }),
};

export const AspectRatioPreview: Story = {
  render: () => ({
    components: { AspectRatio },
    template: `
      <div class="pd-w-[360px]">
        <AspectRatio :ratio="16 / 9" class="pd-overflow-hidden pd-rounded-xl pd-border">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80"
            alt="Workspace"
            class="pd-h-full pd-w-full pd-object-cover"
          />
        </AspectRatio>
      </div>
    `,
  }),
};

export const ProgressPreview: Story = {
  render: () => ({
    components: { Progress },
    setup() {
      const value = ref(68);
      return { value };
    },
    template: `
      <div class="pd-grid pd-w-[360px] pd-gap-3">
        <div class="pd-flex pd-items-center pd-justify-between pd-text-sm">
          <span>Migration progress</span>
          <span class="pd-text-muted-foreground">{{ value }}%</span>
        </div>
        <Progress :model-value="value" />
      </div>
    `,
  }),
};

export const SkeletonPreview: Story = {
  render: () => ({
    components: { Skeleton },
    template: `
      <div class="pd-flex pd-w-[360px] pd-items-center pd-space-x-4">
        <Skeleton class="pd-h-12 pd-w-12 pd-rounded-full" />
        <div class="pd-space-y-2">
          <Skeleton class="pd-h-4 pd-w-[220px]" />
          <Skeleton class="pd-h-4 pd-w-[160px]" />
        </div>
      </div>
    `,
  }),
};

export const SeparatorPreview: Story = {
  render: () => ({
    components: { Separator },
    template: `
      <div class="pd-w-[360px] pd-space-y-4">
        <div class="pd-space-y-1">
          <h4 class="pd-text-sm pd-font-medium">Package health</h4>
          <p class="pd-text-sm pd-text-muted-foreground">A quick read on the current UI package status.</p>
        </div>
        <Separator />
        <div class="pd-flex pd-h-5 pd-items-center pd-space-x-4 pd-text-sm">
          <span>React</span>
          <Separator orientation="vertical" />
          <span>Vue</span>
          <Separator orientation="vertical" />
          <span>Storybook</span>
        </div>
      </div>
    `,
  }),
};
