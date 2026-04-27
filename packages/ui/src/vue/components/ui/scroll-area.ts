import { h, defineComponent, type PropType } from 'vue'
import { ScrollAreaRoot, ScrollAreaViewport, ScrollAreaScrollbar, ScrollAreaThumb, ScrollAreaCorner } from 'radix-vue'
import { cn } from 'pd-shad-ui/lib/utils'

const ScrollArea = defineComponent({
  name: 'ScrollArea',
  props: {
    class: { type: String as PropType<string>, default: '' },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h(ScrollAreaRoot, {
        ...attrs,
        class: cn('pd-relative pd-overflow-hidden', props.class),
      }, () => [
        h(ScrollAreaViewport, {
          class: 'pd-h-full pd-w-full pd-rounded-[inherit]',
        }, slots),
        h(ScrollBar),
        h(ScrollAreaCorner),
      ])
  },
})

const ScrollBar = defineComponent({
  name: 'ScrollBar',
  props: {
    class: { type: String as PropType<string>, default: '' },
    orientation: { type: String as PropType<'vertical' | 'horizontal'>, default: 'vertical' },
  },
  setup(props, { attrs }) {
    return () =>
      h(ScrollAreaScrollbar, {
        ...attrs,
        orientation: props.orientation,
        class: cn(
          'pd-flex pd-touch-none pd-select-none pd-transition-colors',
          props.orientation === 'vertical' &&
            'pd-h-full pd-w-2.5 pd-border-l pd-border-l-transparent pd-p-[1px]',
          props.orientation === 'horizontal' &&
            'pd-h-2.5 pd-flex-col pd-border-t pd-border-t-transparent pd-p-[1px]',
          props.class
        ),
      }, () => h(ScrollAreaThumb, {
        class: 'pd-relative pd-flex-1 pd-rounded-full pd-bg-border',
      }))
  },
})

export { ScrollArea, ScrollBar }
