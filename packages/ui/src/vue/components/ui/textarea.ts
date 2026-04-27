import { h, defineComponent, type PropType } from 'vue'
import { cn } from 'pd-shad-ui/lib/utils'

const Textarea = defineComponent({
  name: 'Textarea',
  props: {
    class: { type: String as PropType<string>, default: '' },
    modelValue: { type: String as PropType<string>, default: undefined },
    disabled: { type: Boolean, default: false },
    placeholder: { type: String as PropType<string>, default: undefined },
  },
  emits: ['update:modelValue'],
  setup(props, { emit, attrs }) {
    return () =>
      h('textarea', {
        ...attrs,
        value: props.modelValue,
        disabled: props.disabled,
        placeholder: props.placeholder,
        class: cn(
          'pd-flex pd-min-h-[80px] pd-w-full pd-rounded-md pd-border pd-border-input pd-bg-background pd-px-3 pd-py-2 pd-text-sm pd-ring-offset-background placeholder:pd-text-muted-foreground focus-visible:pd-outline-none focus-visible:pd-ring-2 focus-visible:pd-ring-ring focus-visible:pd-ring-offset-2 disabled:pd-cursor-not-allowed disabled:pd-opacity-50',
          props.class
        ),
        onInput: (e: Event) => emit('update:modelValue', (e.target as HTMLTextAreaElement).value),
      })
  },
})

export { Textarea }
