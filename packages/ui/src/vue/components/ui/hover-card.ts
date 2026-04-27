import { h, defineComponent, type PropType } from 'vue'
import {
  HoverCardRoot,
  HoverCardTrigger as HoverCardTriggerPrimitive,
  HoverCardContent as HoverCardContentPrimitive,
  HoverCardPortal,
} from 'radix-vue'
import { cn } from 'pd-shad-ui/lib/utils'

const HoverCard = defineComponent({
  name: 'HoverCard',
  props: {
    openDelay: { type: Number, default: 700 },
    closeDelay: { type: Number, default: 300 },
  },
  setup(props, { slots }) {
    return () => h(HoverCardRoot, { openDelay: props.openDelay, closeDelay: props.closeDelay }, slots)
  },
})

const HoverCardTrigger = defineComponent({
  name: 'HoverCardTrigger',
  props: { asChild: { type: Boolean, default: false } },
  setup(props, { slots, attrs }) {
    return () => h(HoverCardTriggerPrimitive, { ...attrs, asChild: props.asChild }, slots)
  },
})

const HoverCardContent = defineComponent({
  name: 'HoverCardContent',
  props: {
    class: { type: String as PropType<string>, default: '' },
    align: { type: String as PropType<'start' | 'center' | 'end'>, default: 'center' },
    sideOffset: { type: Number, default: 4 },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h(HoverCardPortal, {}, () =>
        h(HoverCardContentPrimitive, {
          ...attrs,
          align: props.align,
          sideOffset: props.sideOffset,
          class: cn(
            'pd-z-50 pd-w-64 pd-rounded-md pd-border pd-bg-popover pd-p-4 pd-text-popover-foreground pd-shadow-md pd-outline-none data-[state=open]:pd-animate-in data-[state=closed]:pd-animate-out data-[state=closed]:pd-fade-out-0 data-[state=open]:pd-fade-in-0 data-[state=closed]:pd-zoom-out-95 data-[state=open]:pd-zoom-in-95 data-[side=bottom]:pd-slide-in-from-top-2 data-[side=left]:pd-slide-in-from-right-2 data-[side=right]:pd-slide-in-from-left-2 data-[side=top]:pd-slide-in-from-bottom-2',
            props.class
          ),
        }, slots)
      )
  },
})

export { HoverCard, HoverCardTrigger, HoverCardContent }
