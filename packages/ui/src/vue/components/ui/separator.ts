import { h, defineComponent, type PropType } from 'vue'
import { Separator as SeparatorPrimitive } from 'radix-vue'
import { cn } from 'pd-shad-ui/lib/utils'

const Separator = defineComponent({
  name: 'Separator',
  props: {
    class: { type: String as PropType<string>, default: '' },
    orientation: { type: String as PropType<'horizontal' | 'vertical'>, default: 'horizontal' },
    decorative: { type: Boolean, default: true },
  },
  setup(props, { attrs }) {
    return () =>
      h(SeparatorPrimitive, {
        ...attrs,
        decorative: props.decorative,
        orientation: props.orientation,
        class: cn(
          'pd-shrink-0 pd-bg-border',
          props.orientation === 'horizontal' ? 'pd-h-[1px] pd-w-full' : 'pd-h-full pd-w-[1px]',
          props.class
        ),
      })
  },
})

export { Separator }
