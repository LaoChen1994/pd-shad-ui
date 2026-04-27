import { h, defineComponent, type PropType } from 'vue'
import { ProgressRoot, ProgressIndicator } from 'radix-vue'
import { cn } from 'pd-shad-ui/lib/utils'

const Progress = defineComponent({
  name: 'Progress',
  props: {
    class: { type: String as PropType<string>, default: '' },
    modelValue: { type: Number as PropType<number>, default: 0 },
    max: { type: Number as PropType<number>, default: 100 },
  },
  setup(props, { attrs }) {
    return () =>
      h(ProgressRoot, {
        ...attrs,
        modelValue: props.modelValue,
        max: props.max,
        class: cn(
          'pd-relative pd-h-4 pd-w-full pd-overflow-hidden pd-rounded-full pd-bg-secondary',
          props.class
        ),
      }, () => h(ProgressIndicator, {
        class: 'pd-h-full pd-w-full pd-flex-1 pd-bg-primary pd-transition-all',
        style: { transform: `translateX(-${100 - (props.modelValue || 0)}%)` },
      }))
  },
})

export { Progress }
