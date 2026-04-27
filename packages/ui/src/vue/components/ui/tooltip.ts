import { h, defineComponent, type PropType } from 'vue'
import {
  TooltipRoot,
  TooltipTrigger as TooltipTriggerPrimitive,
  TooltipContent as TooltipContentPrimitive,
  TooltipProvider as TooltipProviderPrimitive,
  TooltipPortal,
} from 'radix-vue'
import { cn } from 'pd-shad-ui/lib/utils'

const TooltipProvider = defineComponent({
  name: 'TooltipProvider',
  props: {
    delayDuration: { type: Number, default: 700 },
    skipDelayDuration: { type: Number, default: 300 },
  },
  setup(props, { slots }) {
    return () =>
      h(TooltipProviderPrimitive, {
        delayDuration: props.delayDuration,
        skipDelayDuration: props.skipDelayDuration,
      }, slots)
  },
})

const Tooltip = defineComponent({
  name: 'Tooltip',
  setup(_props, { slots }) {
    return () => h(TooltipRoot, {}, slots)
  },
})

const TooltipTrigger = defineComponent({
  name: 'TooltipTrigger',
  props: {
    asChild: { type: Boolean, default: false },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h(TooltipTriggerPrimitive, {
        ...attrs,
        asChild: props.asChild,
      }, slots)
  },
})

const TooltipContent = defineComponent({
  name: 'TooltipContent',
  props: {
    class: { type: String as PropType<string>, default: '' },
    sideOffset: { type: Number, default: 4 },
    side: { type: String as PropType<'top' | 'right' | 'bottom' | 'left'>, default: 'top' },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h(TooltipPortal, {}, () =>
        h(TooltipContentPrimitive, {
          ...attrs,
          sideOffset: props.sideOffset,
          side: props.side,
          class: cn(
            'pd-z-50 pd-overflow-hidden pd-rounded-md pd-border pd-bg-popover pd-px-3 pd-py-1.5 pd-text-sm pd-text-popover-foreground pd-shadow-md pd-animate-in pd-fade-in-0 pd-zoom-in-95 data-[state=closed]:pd-animate-out data-[state=closed]:pd-fade-out-0 data-[state=closed]:pd-zoom-out-95 data-[side=bottom]:pd-slide-in-from-top-2 data-[side=left]:pd-slide-in-from-right-2 data-[side=right]:pd-slide-in-from-left-2 data-[side=top]:pd-slide-in-from-bottom-2',
            props.class
          ),
        }, slots)
      )
  },
})

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
