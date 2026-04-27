import { h, defineComponent, type PropType } from 'vue'
import {
  SelectRoot,
  SelectGroup as SelectGroupPrimitive,
  SelectValue as SelectValuePrimitive,
  SelectTrigger as SelectTriggerPrimitive,
  SelectScrollUpButton as SelectScrollUpButtonPrimitive,
  SelectScrollDownButton as SelectScrollDownButtonPrimitive,
  SelectContent as SelectContentPrimitive,
  SelectLabel as SelectLabelPrimitive,
  SelectItem as SelectItemPrimitive,
  SelectItemText,
  SelectItemIndicator,
  SelectSeparator as SelectSeparatorPrimitive,
  SelectPortal,
  SelectViewport,
  SelectIcon,
} from 'radix-vue'
import { Check, ChevronDown, ChevronUp } from 'lucide-vue-next'
import { cn } from 'pd-shad-ui/lib/utils'

const Select = defineComponent({
  name: 'Select',
  props: {
    modelValue: { type: String, default: undefined },
    defaultValue: { type: String, default: undefined },
  },
  emits: ['update:modelValue'],
  setup(props, { slots, emit }) {
    return () =>
      h(SelectRoot, {
        modelValue: props.modelValue,
        defaultValue: props.defaultValue,
        'onUpdate:modelValue': (val: string) => emit('update:modelValue', val),
      }, slots)
  },
})

const SelectGroup = defineComponent({
  name: 'SelectGroup',
  setup(_props, { slots }) {
    return () => h(SelectGroupPrimitive, {}, slots)
  },
})

const SelectValue = defineComponent({
  name: 'SelectValue',
  props: { placeholder: { type: String, default: undefined } },
  setup(props) {
    return () => h(SelectValuePrimitive, { placeholder: props.placeholder })
  },
})

const SelectTrigger = defineComponent({
  name: 'SelectTrigger',
  props: { class: { type: String as PropType<string>, default: '' } },
  setup(props, { slots, attrs }) {
    return () =>
      h(SelectTriggerPrimitive, {
        ...attrs,
        class: cn(
          'pd-flex pd-h-10 pd-w-full pd-items-center pd-justify-between pd-rounded-md pd-border pd-border-input pd-bg-background pd-px-3 pd-py-2 pd-text-sm pd-ring-offset-background placeholder:pd-text-muted-foreground focus:pd-outline-none focus:pd-ring-2 focus:pd-ring-ring focus:pd-ring-offset-2 disabled:pd-cursor-not-allowed disabled:pd-opacity-50 [&>span]:pd-line-clamp-1',
          props.class
        ),
      }, () => [
        slots.default?.(),
        h(SelectIcon, { asChild: true }, () =>
          h(ChevronDown, { class: 'pd-h-4 pd-w-4 pd-opacity-50' })
        ),
      ])
  },
})

const SelectScrollUpButton = defineComponent({
  name: 'SelectScrollUpButton',
  props: { class: { type: String as PropType<string>, default: '' } },
  setup(props, { attrs }) {
    return () =>
      h(SelectScrollUpButtonPrimitive, {
        ...attrs,
        class: cn('pd-flex pd-cursor-default pd-items-center pd-justify-center pd-py-1', props.class),
      }, () => h(ChevronUp, { class: 'pd-h-4 pd-w-4' }))
  },
})

const SelectScrollDownButton = defineComponent({
  name: 'SelectScrollDownButton',
  props: { class: { type: String as PropType<string>, default: '' } },
  setup(props, { attrs }) {
    return () =>
      h(SelectScrollDownButtonPrimitive, {
        ...attrs,
        class: cn('pd-flex pd-cursor-default pd-items-center pd-justify-center pd-py-1', props.class),
      }, () => h(ChevronDown, { class: 'pd-h-4 pd-w-4' }))
  },
})

const SelectContent = defineComponent({
  name: 'SelectContent',
  props: {
    class: { type: String as PropType<string>, default: '' },
    position: { type: String as PropType<'popper' | 'item-aligned'>, default: 'popper' },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h(SelectPortal, {}, () =>
        h(SelectContentPrimitive, {
          ...attrs,
          position: props.position,
          class: cn(
            'pd-relative pd-z-50 pd-max-h-96 pd-min-w-[8rem] pd-overflow-hidden pd-rounded-md pd-border pd-bg-popover pd-text-popover-foreground pd-shadow-md data-[state=open]:pd-animate-in data-[state=closed]:pd-animate-out data-[state=closed]:pd-fade-out-0 data-[state=open]:pd-fade-in-0 data-[state=closed]:pd-zoom-out-95 data-[state=open]:pd-zoom-in-95 data-[side=bottom]:pd-slide-in-from-top-2 data-[side=left]:pd-slide-in-from-right-2 data-[side=right]:pd-slide-in-from-left-2 data-[side=top]:pd-slide-in-from-bottom-2',
            props.position === 'popper' &&
              'data-[side=bottom]:pd-translate-y-1 data-[side=left]:pd--translate-x-1 data-[side=right]:pd-translate-x-1 data-[side=top]:pd--translate-y-1',
            props.class
          ),
        }, () => [
          h(SelectScrollUpButton),
          h(SelectViewport, {
            class: cn(
              'pd-p-1',
              props.position === 'popper' &&
                'pd-h-[var(--radix-select-trigger-height)] pd-w-full pd-min-w-[var(--radix-select-trigger-width)]'
            ),
          }, slots),
          h(SelectScrollDownButton),
        ])
      )
  },
})

const SelectLabel = defineComponent({
  name: 'SelectLabel',
  props: { class: { type: String as PropType<string>, default: '' } },
  setup(props, { slots, attrs }) {
    return () =>
      h(SelectLabelPrimitive, {
        ...attrs,
        class: cn('pd-py-1.5 pd-pl-8 pd-pr-2 pd-text-sm pd-font-semibold', props.class),
      }, slots)
  },
})

const SelectItem = defineComponent({
  name: 'SelectItem',
  props: {
    class: { type: String as PropType<string>, default: '' },
    value: { type: String, required: true },
    disabled: { type: Boolean, default: false },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h(SelectItemPrimitive, {
        ...attrs,
        value: props.value,
        disabled: props.disabled,
        class: cn(
          'pd-relative pd-flex pd-w-full pd-cursor-default pd-select-none pd-items-center pd-rounded-sm pd-py-1.5 pd-pl-8 pd-pr-2 pd-text-sm pd-outline-none focus:pd-bg-accent focus:pd-text-accent-foreground data-[disabled]:pd-pointer-events-none data-[disabled]:pd-opacity-50',
          props.class
        ),
      }, () => [
        h('span', { class: 'pd-absolute pd-left-2 pd-flex pd-h-3.5 pd-w-3.5 pd-items-center pd-justify-center' }, () =>
          h(SelectItemIndicator, {}, () => h(Check, { class: 'pd-h-4 pd-w-4' }))
        ),
        h(SelectItemText, {}, slots),
      ])
  },
})

const SelectSeparator = defineComponent({
  name: 'SelectSeparator',
  props: { class: { type: String as PropType<string>, default: '' } },
  setup(props, { attrs }) {
    return () =>
      h(SelectSeparatorPrimitive, {
        ...attrs,
        class: cn('pd--mx-1 pd-my-1 pd-h-px pd-bg-muted', props.class),
      })
  },
})

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}
