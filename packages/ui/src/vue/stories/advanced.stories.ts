import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import { Button } from "../components/ui/button";
import { Calendar } from "../components/ui/calendar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../components/ui/carousel";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "../components/ui/resizable";
import { ScrollArea } from "../components/ui/scroll-area";

const meta = {
  title: "Vue/Advanced",
  parameters: {
    layout: "padded",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const CalendarPreview: Story = {
  render: () => ({
    components: { Calendar },
    setup() {
      const value = ref();
      return { value };
    },
    template: `
      <Calendar v-model="value" class="pd-rounded-md pd-border" />
    `,
  }),
};

export const ScrollAreaPreview: Story = {
  render: () => ({
    components: { ScrollArea },
    setup() {
      const tags = Array.from({ length: 24 }, (_, index) => `Component ${index + 1}`);
      return { tags };
    },
    template: `
      <ScrollArea class="pd-h-72 pd-w-72 pd-rounded-md pd-border">
        <div class="pd-p-4">
          <h4 class="pd-mb-4 pd-text-sm pd-font-medium">Preview queue</h4>
          <div class="pd-space-y-2">
            <div
              v-for="tag in tags"
              :key="tag"
              class="pd-rounded-md pd-border pd-px-3 pd-py-2 pd-text-sm"
            >
              {{ tag }}
            </div>
          </div>
        </div>
      </ScrollArea>
    `,
  }),
};

export const CarouselPreview: Story = {
  render: () => ({
    components: { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious },
    setup() {
      const slides = ["React parity", "Vue stories", "Release checklist"];
      return { slides };
    },
    template: `
      <Carousel class="pd-w-full pd-max-w-xl">
        <CarouselContent>
          <CarouselItem v-for="slide in slides" :key="slide">
            <div class="pd-rounded-xl pd-border pd-bg-muted/40 pd-p-10 pd-text-center">
              <div class="pd-text-lg pd-font-semibold">{{ slide }}</div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    `,
  }),
};

export const ResizablePreview: Story = {
  render: () => ({
    components: { ResizableHandle, ResizablePanel, ResizablePanelGroup },
    template: `
      <ResizablePanelGroup direction="horizontal" class="pd-min-h-[220px] pd-max-w-3xl pd-rounded-lg pd-border">
        <ResizablePanel :default-size="35">
          <div class="pd-flex pd-h-full pd-items-center pd-justify-center pd-bg-muted/30 pd-p-6">
            Navigation
          </div>
        </ResizablePanel>
        <ResizableHandle with-handle />
        <ResizablePanel :default-size="65">
          <div class="pd-flex pd-h-full pd-items-center pd-justify-center pd-p-6">
            Editor canvas
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    `,
  }),
};
