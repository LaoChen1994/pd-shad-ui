import { h, defineComponent, type PropType } from 'vue'
import {
  MenubarRoot,
  MenubarMenu as MenubarMenuPrimitive,
  MenubarTrigger as MenubarTriggerPrimitive,
  MenubarContent as MenubarContentPrimitive,
  MenubarItem as MenubarItemPrimitive,
  MenubarSeparator as MenubarSeparatorPrimitive,
  MenubarLabel as MenubarLabelPrimitive,
  MenubarCheckboxItem as MenubarCheckboxItemPrimitive,
  MenubarRadioGroup as MenubarRadioGroupPrimitive,
  MenubarRadioItem as MenubarRadioItemPrimitive,
  MenubarPortal,
  MenubarSubContent as MenubarSubContentPrimitive,
  MenubarSubTrigger as MenubarSubTriggerPrimitive,
  MenubarGroup as MenubarGroupPrimitive,
  MenubarSub as MenubarSubPrimitive,
  MenubarItemIndicator,
} from 'radix-vue'
import { Check, ChevronRight, Circle } from 'lucide-vue-next'
import { cn } from 'pd-shad-ui/lib/utils'

const MenubarMenu = defineComponent({
  name: 'MenubarMenu',
  setup(_props, { slots }) {
    return () => h(MenubarMenuPrimitive, {}, slots)
  },
})

const MenubarGroup = defineComponent({
  name: 'MenubarGroup',
  setup(_props, { slots }) {
    return () => h(MenubarGroupPrimitive, {}, slots)
  },
})

const MenubarSub = defineComponent({
  name: 'MenubarSub',
  setup(_props, { slots }) {
    return () => h(MenubarSubPrimitive, {}, slots)
  },
})

const MenubarRadioGroup = defineComponent({
  name: 'MenubarRadioGroup',
  setup(_props, { slots }) {
    return () => h(MenubarRadioGroupPrimitive, {}, slots)
  },
})

const Menubar = defineComponent({
  name: 'Menubar',
  props: { class: { type: String as PropType<string>, default: '' } },
  setup(props, { slots, attrs }) {
    return () =>
      h(MenubarRoot, {
        ...attrs,
        class: cn(
          'pd-flex pd-h-10 pd-items-center pd-space-x-1 pd-rounded-md pd-border pd-bg-background pd-p-1',
          props.class
        ),
      }, slots)
  },
})

const MenubarTrigger = defineComponent({
  name: 'MenubarTrigger',
  props: { class: { type: String as PropType<string>, default: '' } },
  setup(props, { slots, attrs }) {
    return () =>
      h(MenubarTriggerPrimitive, {
        ...attrs,
        class: cn(
          'pd-flex pd-cursor-default pd-select-none pd-items-center pd-rounded-sm pd-px-3 pd-py-1.5 pd-text-sm pd-font-medium pd-outline-none focus:pd-bg-accent focus:pd-text-accent-foreground data-[state=open]:pd-bg-accent data-[state=open]:pd-text-accent-foreground',
          props.class
        ),
      }, slots)
  },
})

const MenubarSubTrigger = defineComponent({
  name: 'MenubarSubTrigger',
  props: {
    class: { type: String as PropType<string>, default: '' },
    inset: { type: Boolean, default: false },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h(MenubarSubTriggerPrimitive, {
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

const MenubarSubContent = defineComponent({
  name: 'MenubarSubContent',
  props: { class: { type: String as PropType<string>, default: '' } },
  setup(props, { slots, attrs }) {
    return () =>
      h(MenubarSubContentPrimitive, {
        ...attrs,
        class: cn(
          'pd-z-50 pd-min-w-[8rem] pd-overflow-hidden pd-rounded-md pd-border pd-bg-popover pd-p-1 pd-text-popover-foreground data-[state=open]:pd-animate-in data-[state=closed]:pd-animate-out data-[state=closed]:pd-fade-out-0 data-[state=open]:pd-fade-in-0 data-[state=closed]:pd-zoom-out-95 data-[state=open]:pd-zoom-in-95 data-[side=bottom]:pd-slide-in-from-top-2 data-[side=left]:pd-slide-in-from-right-2 data-[side=right]:pd-slide-in-from-left-2 data-[side=top]:pd-slide-in-from-bottom-2',
          props.class
        ),
      }, slots)
  },
})

const MenubarContent = defineComponent({
  name: 'MenubarContent',
  props: {
    class: { type: String as PropType<string>, default: '' },
    align: { type: String as PropType<'start' | 'center' | 'end'>, default: 'start' },
    alignOffset: { type: Number, default: -4 },
    sideOffset: { type: Number, default: 8 },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h(MenubarPortal, {}, () =>
        h(MenubarContentPrimitive, {
          ...attrs,
          align: props.align,
          alignOffset: props.alignOffset,
          sideOffset: props.sideOffset,
          class: cn(
            'pd-z-50 pd-min-w-[12rem] pd-overflow-hidden pd-rounded-md pd-border pd-bg-popover pd-p-1 pd-text-popover-foreground pd-shadow-md data-[state=open]:pd-animate-in data-[state=closed]:pd-fade-out-0 data-[state=open]:pd-fade-in-0 data-[state=closed]:pd-zoom-out-95 data-[state=open]:pd-zoom-in-95 data-[side=bottom]:pd-slide-in-from-top-2 data-[side=left]:pd-slide-in-from-right-2 data-[side=right]:pd-slide-in-from-left-2 data-[side=top]:pd-slide-in-from-bottom-2',
            props.class
          ),
        }, slots)
      )
  },
})

const MenubarItem = defineComponent({
  name: 'MenubarItem',
  props: {
    class: { type: String as PropType<string>, default: '' },
    inset: { type: Boolean, default: false },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h(MenubarItemPrimitive, {
        ...attrs,
        class: cn(
          'pd-relative pd-flex pd-cursor-default pd-select-none pd-items-center pd-rounded-sm pd-px-2 pd-py-1.5 pd-text-sm pd-outline-none focus:pd-bg-accent focus:pd-text-accent-foreground data-[disabled]:pd-pointer-events-none data-[disabled]:pd-opacity-50',
          props.inset && 'pd-pl-8',
          props.class
        ),
      }, slots)
  },
})

const MenubarCheckboxItem = defineComponent({
  name: 'MenubarCheckboxItem',
  props: {
    class: { type: String as PropType<string>, default: '' },
    checked: { type: [Boolean, String] as PropType<boolean | 'indeterminate'>, default: false },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h(MenubarCheckboxItemPrimitive, {
        ...attrs,
        checked: props.checked,
        class: cn(
          'pd-relative pd-flex pd-cursor-default pd-select-none pd-items-center pd-rounded-sm pd-py-1.5 pd-pl-8 pd-pr-2 pd-text-sm pd-outline-none focus:pd-bg-accent focus:pd-text-accent-foreground data-[disabled]:pd-pointer-events-none data-[disabled]:pd-opacity-50',
          props.class
        ),
      }, () => [
        h('span', { class: 'pd-absolute pd-left-2 pd-flex pd-h-3.5 pd-w-3.5 pd-items-center pd-justify-center' }, () =>
          h(MenubarItemIndicator, {}, () => h(Check, { class: 'pd-h-4 pd-w-4' }))
        ),
        slots.default?.(),
      ])
  },
})

const MenubarRadioItem = defineComponent({
  name: 'MenubarRadioItem',
  props: {
    class: { type: String as PropType<string>, default: '' },
    value: { type: String, required: true },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h(MenubarRadioItemPrimitive, {
        ...attrs,
        value: props.value,
        class: cn(
          'pd-relative pd-flex pd-cursor-default pd-select-none pd-items-center pd-rounded-sm pd-py-1.5 pd-pl-8 pd-pr-2 pd-text-sm pd-outline-none focus:pd-bg-accent focus:pd-text-accent-foreground data-[disabled]:pd-pointer-events-none data-[disabled]:pd-opacity-50',
          props.class
        ),
      }, () => [
        h('span', { class: 'pd-absolute pd-left-2 pd-flex pd-h-3.5 pd-w-3.5 pd-items-center pd-justify-center' }, () =>
          h(MenubarItemIndicator, {}, () => h(Circle, { class: 'pd-h-2 pd-w-2 pd-fill-current' }))
        ),
        slots.default?.(),
      ])
  },
})

const MenubarLabel = defineComponent({
  name: 'MenubarLabel',
  props: {
    class: { type: String as PropType<string>, default: '' },
    inset: { type: Boolean, default: false },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h(MenubarLabelPrimitive, {
        ...attrs,
        class: cn(
          'pd-px-2 pd-py-1.5 pd-text-sm pd-font-semibold',
          props.inset && 'pd-pl-8',
          props.class
        ),
      }, slots)
  },
})

const MenubarSeparator = defineComponent({
  name: 'MenubarSeparator',
  props: { class: { type: String as PropType<string>, default: '' } },
  setup(props, { attrs }) {
    return () =>
      h(MenubarSeparatorPrimitive, {
        ...attrs,
        class: cn('pd--mx-1 pd-my-1 pd-h-px pd-bg-muted', props.class),
      })
  },
})

const MenubarShortcut = defineComponent({
  name: 'MenubarShortcut',
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
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
}
