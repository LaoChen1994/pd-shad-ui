import { h, defineComponent, type PropType } from 'vue'
import { TabsRoot, TabsList as TabsListPrimitive, TabsTrigger as TabsTriggerPrimitive, TabsContent as TabsContentPrimitive } from 'radix-vue'
import { cn } from 'pd-shad-ui/lib/utils'

const Tabs = defineComponent({
  name: 'Tabs',
  props: {
    class: { type: String as PropType<string>, default: '' },
    defaultValue: { type: String as PropType<string>, default: undefined },
    modelValue: { type: String as PropType<string>, default: undefined },
    orientation: { type: String as PropType<'horizontal' | 'vertical'>, default: 'horizontal' },
  },
  emits: ['update:modelValue'],
  setup(props, { slots, emit, attrs }) {
    return () =>
      h(TabsRoot as any, {
        ...attrs,
        defaultValue: props.defaultValue,
        modelValue: props.modelValue,
        orientation: props.orientation,
        'onUpdate:modelValue': (val: string) => emit('update:modelValue', val),
        class: props.class || undefined,
      }, slots as any)
  },
})

const TabsList = defineComponent({
  name: 'TabsList',
  props: {
    class: { type: String as PropType<string>, default: '' },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h(TabsListPrimitive, {
        ...attrs,
        class: cn(
          'pd-inline-flex pd-h-10 pd-items-center pd-justify-center pd-rounded-md pd-bg-muted pd-p-1 pd-text-muted-foreground',
          props.class
        ),
      }, slots)
  },
})

const TabsTrigger = defineComponent({
  name: 'TabsTrigger',
  props: {
    class: { type: String as PropType<string>, default: '' },
    value: { type: String as PropType<string>, required: true },
    disabled: { type: Boolean, default: false },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h(TabsTriggerPrimitive, {
        ...attrs,
        value: props.value,
        disabled: props.disabled,
        class: cn(
          'pd-inline-flex pd-items-center pd-justify-center pd-whitespace-nowrap pd-rounded-sm pd-px-3 pd-py-1.5 pd-text-sm pd-font-medium pd-ring-offset-background pd-transition-all focus-visible:pd-outline-none focus-visible:pd-ring-2 focus-visible:pd-ring-ring focus-visible:pd-ring-offset-2 disabled:pd-pointer-events-none disabled:pd-opacity-50 data-[state=active]:pd-bg-background data-[state=active]:pd-text-foreground data-[state=active]:pd-shadow-sm',
          props.class
        ),
      }, slots)
  },
})

const TabsContent = defineComponent({
  name: 'TabsContent',
  props: {
    class: { type: String as PropType<string>, default: '' },
    value: { type: String as PropType<string>, required: true },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h(TabsContentPrimitive, {
        ...attrs,
        value: props.value,
        class: cn(
          'pd-mt-2 pd-ring-offset-background focus-visible:pd-outline-none focus-visible:pd-ring-2 focus-visible:pd-ring-ring focus-visible:pd-ring-offset-2',
          props.class
        ),
      }, slots)
  },
})

export { Tabs, TabsList, TabsTrigger, TabsContent }
