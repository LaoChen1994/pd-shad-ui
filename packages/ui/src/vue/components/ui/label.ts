import { h, defineComponent, type PropType } from 'vue'
import { Label as LabelPrimitive } from 'radix-vue'
import { cn } from 'pd-shad-ui/lib/utils'

const Label = defineComponent({
  name: 'Label',
  props: {
    class: { type: String as PropType<string>, default: '' },
    for: { type: String as PropType<string>, default: undefined },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h(LabelPrimitive, {
        ...attrs,
        for: props.for,
        class: cn(
          'pd-text-sm pd-font-medium pd-leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
          props.class
        ),
      }, slots.default?.())
  },
})

export { Label }
