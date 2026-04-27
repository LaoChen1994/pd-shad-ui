import { h, defineComponent, type PropType } from 'vue'
import { CheckboxRoot, CheckboxIndicator } from 'radix-vue'
import { Check } from 'lucide-vue-next'
import { cn } from 'pd-shad-ui/lib/utils'

const Checkbox = defineComponent({
  name: 'Checkbox',
  props: {
    class: { type: String as PropType<string>, default: '' },
    checked: { type: [Boolean, String] as PropType<boolean | 'indeterminate'>, default: undefined },
    defaultChecked: { type: Boolean, default: undefined },
    disabled: { type: Boolean, default: false },
  },
  emits: ['update:checked'],
  setup(props, { emit, attrs }) {
    return () =>
      h(CheckboxRoot, {
        ...attrs,
        checked: props.checked,
        defaultChecked: props.defaultChecked,
        disabled: props.disabled,
        'onUpdate:checked': (val: boolean | 'indeterminate') => emit('update:checked', val),
        class: cn(
          'peer pd-h-4 pd-w-4 pd-shrink-0 pd-rounded-sm pd-border pd-border-primary pd-ring-offset-background focus-visible:pd-outline-none focus-visible:pd-ring-2 focus-visible:pd-ring-ring focus-visible:pd-ring-offset-2 disabled:pd-cursor-not-allowed disabled:pd-opacity-50 data-[state=checked]:pd-bg-primary data-[state=checked]:pd-text-primary-foreground',
          props.class
        ),
      }, () => h(CheckboxIndicator, {
        class: cn('pd-flex pd-items-center pd-justify-center pd-text-current'),
      }, () => h(Check, { class: 'pd-h-4 pd-w-4' })))
  },
})

export { Checkbox }
