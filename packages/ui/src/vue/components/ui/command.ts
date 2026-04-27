import { defineComponent, h, type PropType, type Component, computed } from 'vue'
import {
  ComboboxRoot,
  ComboboxInput,
  ComboboxContent,
  ComboboxViewport,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxItem,
  ComboboxSeparator,
  ComboboxLabel,
} from 'radix-vue'
import { Search } from 'lucide-vue-next'
import { cn } from 'pd-shad-ui/lib/utils'
import { Dialog, DialogContent } from './dialog'

const Command: Component<any> = defineComponent({
  name: 'Command',
  props: { class: { type: String, default: '' }, dir: { type: String, default: 'ltr' } },
  setup(props, { slots, attrs }) {
    return () =>
      h(ComboboxRoot as any, {
        ...attrs,
        open: true,
        modelValue: '',
        dir: props.dir as any,
        class: cn(
          'pd-flex pd-h-full pd-w-full pd-flex-col pd-overflow-hidden pd-rounded-md pd-bg-popover pd-text-popover-foreground',
          props.class
        ),
      }, slots.default?.())
  },
})

const CommandDialog: Component<any> = defineComponent({
  name: 'CommandDialog',
  props: { open: { type: Boolean, default: false } },
  emits: ['update:open'],
  setup(props, { slots, emit, attrs }) {
    return () =>
      h(Dialog as any, {
        open: props.open,
        'onUpdate:open': (v: boolean) => emit('update:open', v),
        ...attrs,
      }, {
        default: () => [
          h(DialogContent as any, { class: 'pd-overflow-hidden pd-p-0 pd-shadow-lg' }, () => [
            h(Command, {
              class: '[&_[cmdk-group-heading]]:pd-px-2 [&_[cmdk-group-heading]]:pd-font-medium [&_[cmdk-group-heading]]:pd-text-muted-foreground [&_[cmdk-group]]:pd-px-2 [&_[cmdk-input-wrapper]_svg]:pd-h-5 [&_[cmdk-input-wrapper]_svg]:pd-w-5 [&_[cmdk-input]]:pd-h-12 [&_[cmdk-item]]:pd-px-2 [&_[cmdk-item]]:pd-py-3 [&_[cmdk-item]_svg]:pd-h-5 [&_[cmdk-item]_svg]:pd-w-5'
            }, slots.default?.())
          ])
        ]
      })
  },
})

const CommandInput: Component<any> = defineComponent({
  name: 'CommandInput',
  props: { class: { type: String, default: '' } },
  setup(props, { attrs }) {
    return () =>
      h('div', { class: 'pd-flex pd-items-center pd-border-b pd-px-3', 'cmdk-input-wrapper': '' }, [
        h(Search as any, { class: 'pd-mr-2 pd-h-4 pd-w-4 pd-shrink-0 pd-opacity-50' }),
        h(ComboboxInput as any, {
          ...attrs,
          class: cn(
            'pd-flex pd-h-11 pd-w-full pd-rounded-md pd-bg-transparent pd-py-3 pd-text-sm pd-outline-none placeholder:pd-text-muted-foreground disabled:pd-cursor-not-allowed disabled:pd-opacity-50',
            props.class
          ),
        })
      ])
  },
})

const CommandList: Component<any> = defineComponent({
  name: 'CommandList',
  props: { class: { type: String, default: '' } },
  setup(props, { slots, attrs }) {
    return () =>
      h(ComboboxContent as any, {
        ...attrs,
        class: cn('pd-max-h-[300px] pd-overflow-y-auto pd-overflow-x-hidden', props.class)
      }, () => [
        h(ComboboxViewport as any, { class: 'pd-p-1' }, slots.default?.())
      ])
  },
})

const CommandEmpty: Component<any> = defineComponent({
  name: 'CommandEmpty',
  props: { class: { type: String, default: '' } },
  setup(props, { slots, attrs }) {
    return () =>
      h(ComboboxEmpty as any, {
        ...attrs,
        class: cn('pd-py-6 pd-text-center pd-text-sm', props.class)
      }, slots.default?.())
  },
})

const CommandGroup: Component<any> = defineComponent({
  name: 'CommandGroup',
  props: { class: { type: String, default: '' }, heading: { type: String, default: '' } },
  setup(props, { slots, attrs }) {
    return () =>
      h(ComboboxGroup as any, {
        ...attrs,
        class: cn(
          'pd-overflow-hidden pd-p-1 pd-text-foreground [&_[cmdk-group-heading]]:pd-px-2 [&_[cmdk-group-heading]]:pd-py-1.5 [&_[cmdk-group-heading]]:pd-text-xs [&_[cmdk-group-heading]]:pd-font-medium [&_[cmdk-group-heading]]:pd-text-muted-foreground',
          props.class
        )
      }, () => [
        props.heading ? h(ComboboxLabel as any, { 'cmdk-group-heading': '' }, () => props.heading) : null,
        slots.default?.()
      ])
  },
})

const CommandSeparator: Component<any> = defineComponent({
  name: 'CommandSeparator',
  props: { class: { type: String, default: '' } },
  setup(props, { attrs }) {
    return () =>
      h(ComboboxSeparator as any, {
        ...attrs,
        class: cn('pd--mx-1 pd-h-px pd-bg-border', props.class)
      })
  },
})

const CommandItem: Component<any> = defineComponent({
  name: 'CommandItem',
  props: { class: { type: String, default: '' }, value: { type: [String, Object, Number] as PropType<any>, required: true } },
  setup(props, { slots, attrs }) {
    return () =>
      h(ComboboxItem as any, {
        ...attrs,
        value: props.value,
        class: cn(
          'pd-relative pd-flex pd-cursor-default pd-gap-2 pd-select-none pd-items-center pd-rounded-sm pd-px-2 pd-py-1.5 pd-text-sm pd-outline-none data-[disabled]:pd-pointer-events-none data-[highlighted]:pd-bg-accent data-[highlighted]:pd-text-accent-foreground data-[disabled]:pd-opacity-50 [&_svg]:pd-pointer-events-none [&_svg]:pd-size-4 [&_svg]:pd-shrink-0',
          props.class
        )
      }, slots.default?.())
  },
})

const CommandShortcut: Component<any> = defineComponent({
  name: 'CommandShortcut',
  props: { class: { type: String, default: '' } },
  setup(props, { slots, attrs }) {
    return () =>
      h('span', {
        ...attrs,
        class: cn('pd-ml-auto pd-text-xs pd-tracking-widest pd-text-muted-foreground', props.class)
      }, slots.default?.())
  },
})

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}
