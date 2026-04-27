import { h, defineComponent, type PropType } from 'vue'
import { Toggle as TogglePrimitive } from 'radix-vue'
import { type VariantProps } from 'class-variance-authority'
import { cn } from 'pd-shad-ui/lib/utils'
import { toggleVariants } from 'pd-shad-ui/variants/toggle'

const Toggle = defineComponent({
  name: 'Toggle',
  props: {
    class: { type: String as PropType<string>, default: '' },
    variant: { type: String as PropType<VariantProps<typeof toggleVariants>['variant']>, default: 'default' },
    size: { type: String as PropType<VariantProps<typeof toggleVariants>['size']>, default: 'default' },
    pressed: { type: Boolean, default: undefined },
    defaultPressed: { type: Boolean, default: undefined },
    disabled: { type: Boolean, default: false },
  },
  emits: ['update:pressed'],
  setup(props, { slots, emit, attrs }) {
    return () =>
      h(TogglePrimitive, {
        ...attrs,
        pressed: props.pressed,
        defaultPressed: props.defaultPressed,
        disabled: props.disabled,
        'onUpdate:pressed': (val: boolean) => emit('update:pressed', val),
        class: cn(toggleVariants({ variant: props.variant, size: props.size }), props.class),
      }, slots)
  },
})

export { Toggle, toggleVariants }
