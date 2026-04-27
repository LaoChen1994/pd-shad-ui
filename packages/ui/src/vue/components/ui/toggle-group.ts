import { h, defineComponent, provide, inject, type PropType, type InjectionKey } from 'vue'
import { ToggleGroupRoot, ToggleGroupItem as ToggleGroupItemPrimitive } from 'radix-vue'
import { type VariantProps } from 'class-variance-authority'
import { cn } from 'pd-shad-ui/lib/utils'
import { toggleVariants } from 'pd-shad-ui/variants/toggle'

interface ToggleGroupContext {
  variant?: VariantProps<typeof toggleVariants>['variant']
  size?: VariantProps<typeof toggleVariants>['size']
}

const toggleGroupContextKey: InjectionKey<ToggleGroupContext> = Symbol('toggleGroupContext')

const ToggleGroup = defineComponent({
  name: 'ToggleGroup',
  props: {
    class: { type: String as PropType<string>, default: '' },
    type: { type: String as PropType<'single' | 'multiple'>, required: true },
    variant: { type: String as PropType<ToggleGroupContext['variant']>, default: 'default' },
    size: { type: String as PropType<ToggleGroupContext['size']>, default: 'default' },
    modelValue: { type: [String, Array] as PropType<string | string[]>, default: undefined },
    disabled: { type: Boolean, default: false },
  },
  emits: ['update:modelValue'],
  setup(props, { slots, emit, attrs }) {
    provide(toggleGroupContextKey, {
      variant: props.variant,
      size: props.size,
    })

    return () =>
      h(ToggleGroupRoot, {
        ...attrs,
        type: props.type,
        modelValue: props.modelValue,
        disabled: props.disabled,
        'onUpdate:modelValue': (val: string | string[]) => emit('update:modelValue', val),
        class: cn('pd-flex pd-items-center pd-justify-center pd-gap-1', props.class),
      }, slots)
  },
})

const ToggleGroupItem = defineComponent({
  name: 'ToggleGroupItem',
  props: {
    class: { type: String as PropType<string>, default: '' },
    value: { type: String as PropType<string>, required: true },
    variant: { type: String as PropType<ToggleGroupContext['variant']>, default: undefined },
    size: { type: String as PropType<ToggleGroupContext['size']>, default: undefined },
    disabled: { type: Boolean, default: false },
  },
  setup(props, { slots, attrs }) {
    const context = inject(toggleGroupContextKey, { variant: 'default', size: 'default' })

    return () =>
      h(ToggleGroupItemPrimitive, {
        ...attrs,
        value: props.value,
        disabled: props.disabled,
        class: cn(
          toggleVariants({
            variant: props.variant ?? context.variant,
            size: props.size ?? context.size,
          }),
          props.class
        ),
      }, slots)
  },
})

export { ToggleGroup, ToggleGroupItem }
