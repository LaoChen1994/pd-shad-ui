import type { Meta, StoryObj } from "@storybook/vue3";
import { reactive, ref } from "vue";
import { Button } from "../components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../components/ui/form";
import { Input } from "../components/ui/input";

const meta = {
  title: "Vue/Form",
  parameters: {
    layout: "centered",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: {
      Button,
      Form,
      FormControl,
      FormDescription,
      FormField,
      FormItem,
      FormLabel,
      FormMessage,
      Input,
    },
    setup() {
      const username = ref("");
      const errors = reactive<{ username?: string }>({});

      const submit = () => {
        errors.username = username.value.trim().length >= 2
          ? undefined
          : "Username must be at least 2 characters.";
      };

      return { errors, submit, username };
    },
    template: `
      <Form :errors="errors" class="pd-w-[360px] pd-space-y-8" @submit.prevent="submit">
        <FormField name="username" :error="errors.username">
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input v-model="username" placeholder="shadcn" />
            </FormControl>
            <FormDescription>This is your public display name.</FormDescription>
            <FormMessage />
          </FormItem>
        </FormField>
        <Button type="submit">Submit</Button>
      </Form>
    `,
  }),
};
