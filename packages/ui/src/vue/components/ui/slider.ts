import { h, defineComponent, type PropType } from 'vue'
import { SliderRoot, SliderTrack, SliderRange, SliderThumb } from 'radix-vue'
import { cn } from 'pd-shad-ui/lib/utils'

const Slider = defineComponent({
  name: 'Slider',
  props: {
    class: { type: String as PropType<string>, default: '' },
    modelValue: { type: Array as PropType<number[]>, default: undefined },
    defaultValue: { type: Array as PropType<number[]>, default: undefined },
    min: { type: Number, default: 0 },
    max: { type: Number, default: 100 },
    step: { type: Number, default: 1 },
    disabled: { type: Boolean, default: false },
    orientation: { type: String as PropType<'horizontal' | 'vertical'>, default: 'horizontal' },
  },
  emits: ['update:modelValue'],
  setup(props, { emit, attrs }) {
    return () =>
      h(SliderRoot, {
        ...attrs,
        ...(props.modelValue ? { modelValue: props.modelValue } : {}),
        ...(props.defaultValue ? { defaultValue: props.defaultValue } : {}),
        min: props.min,
        max: props.max,
        step: props.step,
        disabled: props.disabled,
        orientation: props.orientation,
        'onUpdate:modelValue': (val?: number[]) => { if (val) emit('update:modelValue', val) },
        class: cn(
          'pd-relative pd-flex pd-w-full pd-touch-none pd-select-none pd-items-center',
          props.class
        ),
      }, () => [
        h(SliderTrack, {
          class: 'pd-relative pd-h-2 pd-w-full pd-grow pd-overflow-hidden pd-rounded-full pd-bg-secondary',
        }, () => h(SliderRange, {
          class: 'pd-absolute pd-h-full pd-bg-primary',
        })),
        h(SliderThumb, {
          class: 'pd-block pd-h-5 pd-w-5 pd-rounded-full pd-border-2 pd-border-primary pd-bg-background pd-ring-offset-background pd-transition-colors focus-visible:pd-outline-none focus-visible:pd-ring-2 focus-visible:pd-ring-ring focus-visible:pd-ring-offset-2 disabled:pd-pointer-events-none disabled:pd-opacity-50',
        }),
      ])
  },
})

export { Slider }
