import { h, defineComponent, type PropType } from 'vue'
import {
  ContextMenuRoot,
  ContextMenuTrigger as ContextMenuTriggerPrimitive,
  ContextMenuGroup as ContextMenuGroupPrimitive,
  ContextMenuPortal,
  ContextMenuSub as ContextMenuSubPrimitive,
  ContextMenuRadioGroup as ContextMenuRadioGroupPrimitive,
  ContextMenuSubTrigger as ContextMenuSubTriggerPrimitive,
  ContextMenuSubContent as ContextMenuSubContentPrimitive,
  ContextMenuContent as ContextMenuContentPrimitive,
  ContextMenuItem as ContextMenuItemPrimitive,
  ContextMenuCheckboxItem as ContextMenuCheckboxItemPrimitive,
  ContextMenuRadioItem as ContextMenuRadioItemPrimitive,
  ContextMenuLabel as ContextMenuLabelPrimitive,
  ContextMenuSeparator as ContextMenuSeparatorPrimitive,
  ContextMenuItemIndicator,
} from 'radix-vue'
import { Check, ChevronRight, Circle } from 'lucide-vue-next'
import { cn } from 'pd-shad-ui/lib/utils'

const ContextMenu = defineComponent({
  name: 'ContextMenu',
  setup(_props, { slots }) {
    return () => h(ContextMenuRoot, {}, slots)
  },
})

const ContextMenuTrigger = defineComponent({
  name: 'ContextMenuTrigger',
  props: { asChild: { type: Boolean, default: false } },
  setup(props, { slots, attrs }) {
    return () => h(ContextMenuTriggerPrimitive, { ...attrs, asChild: props.asChild }, slots)
  },
})

const ContextMenuGroup = defineComponent({
  name: 'ContextMenuGroup',
  setup(_props, { slots }) {
    return () => h(ContextMenuGroupPrimitive, {}, slots)
  },
})

const ContextMenuSub = defineComponent({
  name: 'ContextMenuSub',
  setup(_props, { slots }) {
    return () => h(ContextMenuSubPrimitive, {}, slots)
  },
})

const ContextMenuRadioGroup = defineComponent({
  name: 'ContextMenuRadioGroup',
  setup(_props, { slots }) {
    return () => h(ContextMenuRadioGroupPrimitive, {}, slots)
  },
})

const ContextMenuSubTrigger = defineComponent({
  name: 'ContextMenuSubTrigger',
  props: {
    class: { type: String as PropType<string>, default: '' },
    inset: { type: Boolean, default: false },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h(ContextMenuSubTriggerPrimitive, {
        ...attrs,
        class: cn(
          'pd-flex pd-cursor-default pd-select-none pd-items-center pd-rounded-sm pd-px-2 pd-py-1.5 pd-text-sm pd-outline-none focus:pd-bg-accent focus:pd-text-accent-foreground data-[state=open]:pd-bg-accent data-[state=open]:pd-text-accent-foreground',
          props.inset && 'pd-pl-8',
          props.class
        ),
      }, () => [
        slots.default?.(),
        h(ChevronRight, { class: 'pd-ml-auto pd-h-4 pd-w-4' }),
      ])
  },
})

const ContextMenuSubContent = defineComponent({
  name: 'ContextMenuSubContent',
  props: { class: { type: String as PropType<string>, default: '' } },
  setup(props, { slots, attrs }) {
    return () =>
      h(ContextMenuSubContentPrimitive, {
        ...attrs,
        class: cn(
          'pd-z-50 pd-min-w-[8rem] pd-overflow-hidden pd-rounded-md pd-border pd-bg-popover pd-p-1 pd-text-popover-foreground pd-shadow-md data-[state=open]:pd-animate-in data-[state=closed]:pd-animate-out data-[state=closed]:pd-fade-out-0 data-[state=open]:pd-fade-in-0 data-[state=closed]:pd-zoom-out-95 data-[state=open]:pd-zoom-in-95 data-[side=bottom]:pd-slide-in-from-top-2 data-[side=left]:pd-slide-in-from-right-2 data-[side=right]:pd-slide-in-from-left-2 data-[side=top]:pd-slide-in-from-bottom-2',
          props.class
        ),
      }, slots)
  },
})

const ContextMenuContent = defineComponent({
  name: 'ContextMenuContent',
  props: { class: { type: String as PropType<string>, default: '' } },
  setup(props, { slots, attrs }) {
    return () =>
      h(ContextMenuPortal, {}, () =>
        h(ContextMenuContentPrimitive, {
          ...attrs,
          class: cn(
            'pd-z-50 pd-min-w-[8rem] pd-overflow-hidden pd-rounded-md pd-border pd-bg-popover pd-p-1 pd-text-popover-foreground pd-shadow-md pd-animate-in pd-fade-in-80 data-[state=open]:pd-animate-in data-[state=closed]:pd-animate-out data-[state=closed]:pd-fade-out-0 data-[state=open]:pd-fade-in-0 data-[state=closed]:pd-zoom-out-95 data-[state=open]:pd-zoom-in-95 data-[side=bottom]:pd-slide-in-from-top-2 data-[side=left]:pd-slide-in-from-right-2 data-[side=right]:pd-slide-in-from-left-2 data-[side=top]:pd-slide-in-from-bottom-2',
            props.class
          ),
        }, slots)
      )
  },
})

const ContextMenuItem = defineComponent({
  name: 'ContextMenuItem',
  props: {
    class: { type: String as PropType<string>, default: '' },
    inset: { type: Boolean, default: false },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h(ContextMenuItemPrimitive, {
        ...attrs,
        class: cn(
          'pd-relative pd-flex pd-cursor-default pd-select-none pd-items-center pd-rounded-sm pd-px-2 pd-py-1.5 pd-text-sm pd-outline-none focus:pd-bg-accent focus:pd-text-accent-foreground data-[disabled]:pd-pointer-events-none data-[disabled]:pd-opacity-50',
          props.inset && 'pd-pl-8',
          props.class
        ),
      }, slots)
  },
})

const ContextMenuCheckboxItem = defineComponent({
  name: 'ContextMenuCheckboxItem',
  props: {
    class: { type: String as PropType<string>, default: '' },
    checked: { type: [Boolean, String] as PropType<boolean | 'indeterminate'>, default: false },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h(ContextMenuCheckboxItemPrimitive, {
        ...attrs,
        checked: props.checked,
        class: cn(
          'pd-relative pd-flex pd-cursor-default pd-select-none pd-items-center pd-rounded-sm pd-py-1.5 pd-pl-8 pd-pr-2 pd-text-sm pd-outline-none focus:pd-bg-accent focus:pd-text-accent-foreground data-[disabled]:pd-pointer-events-none data-[disabled]:pd-opacity-50',
          props.class
        ),
      }, () => [
        h('span', { class: 'pd-absolute pd-left-2 pd-flex pd-h-3.5 pd-w-3.5 pd-items-center pd-justify-center' }, () =>
          h(ContextMenuItemIndicator, {}, () => h(Check, { class: 'pd-h-4 pd-w-4' }))
        ),
        slots.default?.(),
      ])
  },
})

const ContextMenuRadioItem = defineComponent({
  name: 'ContextMenuRadioItem',
  props: {
    class: { type: String as PropType<string>, default: '' },
    value: { type: String, required: true },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h(ContextMenuRadioItemPrimitive, {
        ...attrs,
        value: props.value,
        class: cn(
          'pd-relative pd-flex pd-cursor-default pd-select-none pd-items-center pd-rounded-sm pd-py-1.5 pd-pl-8 pd-pr-2 pd-text-sm pd-outline-none focus:pd-bg-accent focus:pd-text-accent-foreground data-[disabled]:pd-pointer-events-none data-[disabled]:pd-opacity-50',
          props.class
        ),
      }, () => [
        h('span', { class: 'pd-absolute pd-left-2 pd-flex pd-h-3.5 pd-w-3.5 pd-items-center pd-justify-center' }, () =>
          h(ContextMenuItemIndicator, {}, () => h(Circle, { class: 'pd-h-2 pd-w-2 pd-fill-current' }))
        ),
        slots.default?.(),
      ])
  },
})

const ContextMenuLabel = defineComponent({
  name: 'ContextMenuLabel',
  props: {
    class: { type: String as PropType<string>, default: '' },
    inset: { type: Boolean, default: false },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h(ContextMenuLabelPrimitive, {
        ...attrs,
        class: cn(
          'pd-px-2 pd-py-1.5 pd-text-sm pd-font-semibold pd-text-foreground',
          props.inset && 'pd-pl-8',
          props.class
        ),
      }, slots)
  },
})

const ContextMenuSeparator = defineComponent({
  name: 'ContextMenuSeparator',
  props: { class: { type: String as PropType<string>, default: '' } },
  setup(props, { attrs }) {
    return () =>
      h(ContextMenuSeparatorPrimitive, {
        ...attrs,
        class: cn('pd--mx-1 pd-my-1 pd-h-px pd-bg-border', props.class),
      })
  },
})

const ContextMenuShortcut = defineComponent({
  name: 'ContextMenuShortcut',
  props: { class: { type: String as PropType<string>, default: '' } },
  setup(props, { slots, attrs }) {
    return () =>
      h('span', {
        ...attrs,
        class: cn('pd-ml-auto pd-text-xs pd-tracking-widest pd-text-muted-foreground', props.class),
      }, slots.default?.())
  },
})

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
}
