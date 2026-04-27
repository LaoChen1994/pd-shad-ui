import { h, defineComponent, type PropType } from 'vue'
import {
  DropdownMenuRoot,
  DropdownMenuTrigger as DropdownMenuTriggerPrimitive,
  DropdownMenuGroup as DropdownMenuGroupPrimitive,
  DropdownMenuPortal,
  DropdownMenuSub as DropdownMenuSubPrimitive,
  DropdownMenuRadioGroup as DropdownMenuRadioGroupPrimitive,
  DropdownMenuSubTrigger as DropdownMenuSubTriggerPrimitive,
  DropdownMenuSubContent as DropdownMenuSubContentPrimitive,
  DropdownMenuContent as DropdownMenuContentPrimitive,
  DropdownMenuItem as DropdownMenuItemPrimitive,
  DropdownMenuCheckboxItem as DropdownMenuCheckboxItemPrimitive,
  DropdownMenuRadioItem as DropdownMenuRadioItemPrimitive,
  DropdownMenuLabel as DropdownMenuLabelPrimitive,
  DropdownMenuSeparator as DropdownMenuSeparatorPrimitive,
  DropdownMenuItemIndicator,
} from 'radix-vue'
import { Check, ChevronRight, Circle } from 'lucide-vue-next'
import { cn } from 'pd-shad-ui/lib/utils'

const DropdownMenu = defineComponent({
  name: 'DropdownMenu',
  setup(_props, { slots }) {
    return () => h(DropdownMenuRoot, {}, slots)
  },
})

const DropdownMenuTrigger = defineComponent({
  name: 'DropdownMenuTrigger',
  props: { asChild: { type: Boolean, default: false } },
  setup(props, { slots, attrs }) {
    return () => h(DropdownMenuTriggerPrimitive, { ...attrs, asChild: props.asChild }, slots)
  },
})

const DropdownMenuGroup = defineComponent({
  name: 'DropdownMenuGroup',
  setup(_props, { slots }) {
    return () => h(DropdownMenuGroupPrimitive, {}, slots)
  },
})

const DropdownMenuSub = defineComponent({
  name: 'DropdownMenuSub',
  setup(_props, { slots }) {
    return () => h(DropdownMenuSubPrimitive, {}, slots)
  },
})

const DropdownMenuRadioGroup = defineComponent({
  name: 'DropdownMenuRadioGroup',
  setup(_props, { slots }) {
    return () => h(DropdownMenuRadioGroupPrimitive, {}, slots)
  },
})

const DropdownMenuSubTrigger = defineComponent({
  name: 'DropdownMenuSubTrigger',
  props: {
    class: { type: String as PropType<string>, default: '' },
    inset: { type: Boolean, default: false },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h(DropdownMenuSubTriggerPrimitive, {
        ...attrs,
        class: cn(
          'pd-flex pd-cursor-default pd-select-none pd-items-center pd-rounded-sm pd-px-2 pd-py-1.5 pd-text-sm pd-outline-none focus:pd-bg-accent data-[state=open]:pd-bg-accent',
          props.inset && 'pd-pl-8',
          props.class
        ),
      }, () => [
        slots.default?.(),
        h(ChevronRight, { class: 'pd-ml-auto pd-h-4 pd-w-4' }),
      ])
  },
})

const DropdownMenuSubContent = defineComponent({
  name: 'DropdownMenuSubContent',
  props: { class: { type: String as PropType<string>, default: '' } },
  setup(props, { slots, attrs }) {
    return () =>
      h(DropdownMenuSubContentPrimitive, {
        ...attrs,
        class: cn(
          'pd-z-50 pd-min-w-[8rem] pd-overflow-hidden pd-rounded-md pd-border pd-bg-popover pd-p-1 pd-text-popover-foreground pd-shadow-lg data-[state=open]:pd-animate-in data-[state=closed]:pd-animate-out data-[state=closed]:pd-fade-out-0 data-[state=open]:pd-fade-in-0 data-[state=closed]:pd-zoom-out-95 data-[state=open]:pd-zoom-in-95 data-[side=bottom]:pd-slide-in-from-top-2 data-[side=left]:pd-slide-in-from-right-2 data-[side=right]:pd-slide-in-from-left-2 data-[side=top]:pd-slide-in-from-bottom-2',
          props.class
        ),
      }, slots)
  },
})

const DropdownMenuContent = defineComponent({
  name: 'DropdownMenuContent',
  props: {
    class: { type: String as PropType<string>, default: '' },
    sideOffset: { type: Number, default: 4 },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h(DropdownMenuPortal, {}, () =>
        h(DropdownMenuContentPrimitive, {
          ...attrs,
          sideOffset: props.sideOffset,
          class: cn(
            'pd-z-50 pd-min-w-[8rem] pd-overflow-hidden pd-rounded-md pd-border pd-bg-popover pd-p-1 pd-text-popover-foreground pd-shadow-md data-[state=open]:pd-animate-in data-[state=closed]:pd-animate-out data-[state=closed]:pd-fade-out-0 data-[state=open]:pd-fade-in-0 data-[state=closed]:pd-zoom-out-95 data-[state=open]:pd-zoom-in-95 data-[side=bottom]:pd-slide-in-from-top-2 data-[side=left]:pd-slide-in-from-right-2 data-[side=right]:pd-slide-in-from-left-2 data-[side=top]:pd-slide-in-from-bottom-2',
            props.class
          ),
        }, slots)
      )
  },
})

const DropdownMenuItem = defineComponent({
  name: 'DropdownMenuItem',
  props: {
    class: { type: String as PropType<string>, default: '' },
    inset: { type: Boolean, default: false },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h(DropdownMenuItemPrimitive, {
        ...attrs,
        class: cn(
          'pd-relative pd-flex pd-cursor-default pd-select-none pd-items-center pd-rounded-sm pd-px-2 pd-py-1.5 pd-text-sm pd-outline-none pd-transition-colors focus:pd-bg-accent focus:pd-text-accent-foreground data-[disabled]:pd-pointer-events-none data-[disabled]:pd-opacity-50',
          props.inset && 'pd-pl-8',
          props.class
        ),
      }, slots)
  },
})

const DropdownMenuCheckboxItem = defineComponent({
  name: 'DropdownMenuCheckboxItem',
  props: {
    class: { type: String as PropType<string>, default: '' },
    checked: { type: [Boolean, String] as PropType<boolean | 'indeterminate'>, default: false },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h(DropdownMenuCheckboxItemPrimitive, {
        ...attrs,
        checked: props.checked,
        class: cn(
          'pd-relative pd-flex pd-cursor-default pd-select-none pd-items-center pd-rounded-sm pd-py-1.5 pd-pl-8 pd-pr-2 pd-text-sm pd-outline-none pd-transition-colors focus:pd-bg-accent focus:pd-text-accent-foreground data-[disabled]:pd-pointer-events-none data-[disabled]:pd-opacity-50',
          props.class
        ),
      }, () => [
        h('span', { class: 'pd-absolute pd-left-2 pd-flex pd-h-3.5 pd-w-3.5 pd-items-center pd-justify-center' }, () =>
          h(DropdownMenuItemIndicator, {}, () => h(Check, { class: 'pd-h-4 pd-w-4' }))
        ),
        slots.default?.(),
      ])
  },
})

const DropdownMenuRadioItem = defineComponent({
  name: 'DropdownMenuRadioItem',
  props: {
    class: { type: String as PropType<string>, default: '' },
    value: { type: String, required: true },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h(DropdownMenuRadioItemPrimitive, {
        ...attrs,
        value: props.value,
        class: cn(
          'pd-relative pd-flex pd-cursor-default pd-select-none pd-items-center pd-rounded-sm pd-py-1.5 pd-pl-8 pd-pr-2 pd-text-sm pd-outline-none pd-transition-colors focus:pd-bg-accent focus:pd-text-accent-foreground data-[disabled]:pd-pointer-events-none data-[disabled]:pd-opacity-50',
          props.class
        ),
      }, () => [
        h('span', { class: 'pd-absolute pd-left-2 pd-flex pd-h-3.5 pd-w-3.5 pd-items-center pd-justify-center' }, () =>
          h(DropdownMenuItemIndicator, {}, () => h(Circle, { class: 'pd-h-2 pd-w-2 pd-fill-current' }))
        ),
        slots.default?.(),
      ])
  },
})

const DropdownMenuLabel = defineComponent({
  name: 'DropdownMenuLabel',
  props: {
    class: { type: String as PropType<string>, default: '' },
    inset: { type: Boolean, default: false },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h(DropdownMenuLabelPrimitive, {
        ...attrs,
        class: cn(
          'pd-px-2 pd-py-1.5 pd-text-sm pd-font-semibold',
          props.inset && 'pd-pl-8',
          props.class
        ),
      }, slots)
  },
})

const DropdownMenuSeparator = defineComponent({
  name: 'DropdownMenuSeparator',
  props: { class: { type: String as PropType<string>, default: '' } },
  setup(props, { attrs }) {
    return () =>
      h(DropdownMenuSeparatorPrimitive, {
        ...attrs,
        class: cn('pd--mx-1 pd-my-1 pd-h-px pd-bg-muted', props.class),
      })
  },
})

const DropdownMenuShortcut = defineComponent({
  name: 'DropdownMenuShortcut',
  props: { class: { type: String as PropType<string>, default: '' } },
  setup(props, { slots, attrs }) {
    return () =>
      h('span', {
        ...attrs,
        class: cn('pd-ml-auto pd-text-xs pd-tracking-widest pd-opacity-60', props.class),
      }, slots.default?.())
  },
})

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
}
