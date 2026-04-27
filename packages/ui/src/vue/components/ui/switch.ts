import { h, defineComponent, type PropType } from 'vue'
import { SwitchRoot, SwitchThumb } from 'radix-vue'
import { cn } from 'pd-shad-ui/lib/utils'

const Switch = defineComponent({
  name: 'Switch',
  props: {
    class: { type: String as PropType<string>, default: '' },
    checked: { type: Boolean, default: undefined },
    defaultChecked: { type: Boolean, default: undefined },
    disabled: { type: Boolean, default: false },
  },
  emits: ['update:checked'],
  setup(props, { emit, attrs }) {
    return () =>
      h(SwitchRoot, {
        ...attrs,
        checked: props.checked,
        defaultChecked: props.defaultChecked,
        disabled: props.disabled,
        'onUpdate:checked': (val: boolean) => emit('update:checked', val),
        class: cn(
          'peer pd-inline-flex pd-h-6 pd-w-11 pd-shrink-0 pd-cursor-pointer pd-items-center pd-rounded-full pd-border-2 pd-border-transparent pd-transition-colors focus-visible:pd-outline-none focus-visible:pd-ring-2 focus-visible:pd-ring-ring focus-visible:pd-ring-offset-2 focus-visible:pd-ring-offset-background disabled:pd-cursor-not-allowed disabled:pd-opacity-50 data-[state=checked]:pd-bg-primary data-[state=checked]:pd-border-primary data-[state=unchecked]:pd-bg-input',
          props.class
        ),
      }, () => h(SwitchThumb, {
        class: 'pd-pointer-events-none pd-block pd-h-5 pd-w-5 pd-rounded-full pd-bg-background pd-shadow-lg pd-ring-0 pd-transition-transform data-[state=checked]:pd-translate-x-5 data-[state=unchecked]:pd-translate-x-0',
      }))
  },
})

export { Switch }
