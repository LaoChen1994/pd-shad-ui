import { h, defineComponent, type PropType } from 'vue'
import {
  PopoverRoot,
  PopoverTrigger as PopoverTriggerPrimitive,
  PopoverContent as PopoverContentPrimitive,
  PopoverPortal,
} from 'radix-vue'
import { cn } from 'pd-shad-ui/lib/utils'

const Popover = defineComponent({
  name: 'Popover',
  setup(_props, { slots }) {
    return () => h(PopoverRoot, {}, slots)
  },
})

const PopoverTrigger = defineComponent({
  name: 'PopoverTrigger',
  props: {
    asChild: { type: Boolean, default: false },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h(PopoverTriggerPrimitive, {
        ...attrs,
        asChild: props.asChild,
      }, slots)
  },
})

const PopoverContent = defineComponent({
  name: 'PopoverContent',
  props: {
    class: { type: String as PropType<string>, default: '' },
    align: { type: String as PropType<'start' | 'center' | 'end'>, default: 'center' },
    sideOffset: { type: Number, default: 4 },
    side: { type: String as PropType<'top' | 'right' | 'bottom' | 'left'>, default: 'bottom' },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h(PopoverPortal, {}, () =>
        h(PopoverContentPrimitive, {
          ...attrs,
          align: props.align,
          sideOffset: props.sideOffset,
          side: props.side,
          class: cn(
            'pd-z-50 pd-w-72 pd-rounded-md pd-border pd-bg-popover pd-p-4 pd-text-popover-foreground pd-shadow-md pd-outline-none data-[state=open]:pd-animate-in data-[state=closed]:pd-animate-out data-[state=closed]:pd-fade-out-0 data-[state=open]:pd-fade-in-0 data-[state=closed]:pd-zoom-out-95 data-[state=open]:pd-zoom-in-95 data-[state=bottom]:pd-slide-in-from-top-2 data-[state=left]:pd-slide-in-from-right-2 data-[state=right]:pd-slide-in-from-left-2 data-[state=top]:pd-slide-in-from-bottom-2',
            props.class
          ),
        }, slots)
      )
  },
})

export { Popover, PopoverTrigger, PopoverContent }
