import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import { Checkbox } from "../components/ui/checkbox";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "../components/ui/input-otp";
import { Label } from "../components/ui/label";
import { Slider } from "../components/ui/slider";
import { Switch } from "../components/ui/switch";
import { Textarea } from "../components/ui/textarea";
import { Toggle } from "../components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "../components/ui/toggle-group";

const meta = {
  title: "Vue/Controls",
  parameters: {
    layout: "padded",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckboxAndSwitch: Story = {
  render: () => ({
    components: { Checkbox, Label, Switch },
    setup() {
      const checked = ref(true);
      const enabled = ref(false);
      return { checked, enabled };
    },
    template: `
      <div class="pd-grid pd-gap-6">
        <div class="pd-flex pd-items-center pd-space-x-3">
          <Checkbox id="terms" v-model:checked="checked" />
          <Label for="terms">Accept design system review checklist</Label>
        </div>
        <div class="pd-flex pd-items-center pd-space-x-3">
          <Switch id="alerts" v-model:checked="enabled" />
          <Label for="alerts">Enable release notifications</Label>
        </div>
      </div>
    `,
  }),
};

export const SliderPreview: Story = {
  render: () => ({
    components: { Slider },
    setup() {
      const value = ref([40]);
      return { value };
    },
    template: `
      <div class="pd-grid pd-w-[360px] pd-gap-3">
        <div class="pd-flex pd-items-center pd-justify-between pd-text-sm">
          <span>Density</span>
          <span class="pd-text-muted-foreground">{{ value[0] }}%</span>
        </div>
        <Slider v-model="value" :max="100" :step="5" />
      </div>
    `,
  }),
};

export const TextareaPreview: Story = {
  render: () => ({
    components: { Textarea },
    template: `
      <div class="pd-w-[420px]">
        <Textarea placeholder="Share your notes for the next UI pass..." class="pd-min-h-[140px]" />
      </div>
    `,
  }),
};

export const InputOTPPreview: Story = {
  render: () => ({
    components: { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot },
    setup() {
      const code = ref([]);
      return { code };
    },
    template: `
      <div class="pd-space-y-3">
        <InputOTP v-model="code" :max-length="6">
          <InputOTPGroup>
            <InputOTPSlot :index="0" />
            <InputOTPSlot :index="1" />
            <InputOTPSlot :index="2" />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot :index="3" />
            <InputOTPSlot :index="4" />
            <InputOTPSlot :index="5" />
          </InputOTPGroup>
        </InputOTP>
        <p class="pd-text-sm pd-text-muted-foreground">Entered code: {{ code.join("") || "empty" }}</p>
      </div>
    `,
  }),
};

export const TogglePreview: Story = {
  render: () => ({
    components: { Toggle },
    setup() {
      const pressed = ref(false);
      return { pressed };
    },
    template: `
      <Toggle v-model:pressed="pressed" aria-label="Toggle preview panel">
        Preview
      </Toggle>
    `,
  }),
};

export const ToggleGroupPreview: Story = {
  render: () => ({
    components: { ToggleGroup, ToggleGroupItem },
    setup() {
      const alignment = ref("center");
      return { alignment };
    },
    template: `
      <ToggleGroup v-model="alignment" type="single">
        <ToggleGroupItem value="left" aria-label="Align left">Left</ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Align center">Center</ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Align right">Right</ToggleGroupItem>
      </ToggleGroup>
    `,
  }),
};
