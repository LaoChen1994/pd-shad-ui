import { h, defineComponent, type PropType } from 'vue'
import {
  AccordionRoot,
  AccordionItem as AccordionItemPrimitive,
  AccordionHeader,
  AccordionTrigger as AccordionTriggerPrimitive,
  AccordionContent as AccordionContentPrimitive,
} from 'radix-vue'
import { ChevronDown } from 'lucide-vue-next'
import { cn } from 'pd-shad-ui/lib/utils'

const Accordion = defineComponent({
  name: 'Accordion',
  props: {
    class: { type: String as PropType<string>, default: '' },
    type: { type: String as PropType<'single' | 'multiple'>, required: true },
    modelValue: { type: [String, Array] as PropType<string | string[]>, default: undefined },
    defaultValue: { type: [String, Array] as PropType<string | string[]>, default: undefined },
    collapsible: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
  },
  emits: ['update:modelValue'],
  setup(props, { slots, emit, attrs }) {
    return () =>
      h(AccordionRoot as any, {
        ...attrs,
        type: props.type,
        modelValue: props.modelValue,
        defaultValue: props.defaultValue,
        collapsible: props.collapsible,
        disabled: props.disabled,
        'onUpdate:modelValue': (val: string | string[]) => emit('update:modelValue', val),
        class: props.class || undefined,
      }, slots as any)
  },
})

const AccordionItem = defineComponent({
  name: 'AccordionItem',
  props: {
    class: { type: String as PropType<string>, default: '' },
    value: { type: String as PropType<string>, required: true },
    disabled: { type: Boolean, default: false },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h(AccordionItemPrimitive, {
        ...attrs,
        value: props.value,
        disabled: props.disabled,
        class: cn('pd-border-b', props.class),
      }, slots)
  },
})

const AccordionTrigger = defineComponent({
  name: 'AccordionTrigger',
  props: {
    class: { type: String as PropType<string>, default: '' },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h(AccordionHeader, { class: 'pd-flex' }, () =>
        h(AccordionTriggerPrimitive, {
          ...attrs,
          class: cn(
            'pd-flex pd-flex-1 pd-items-center pd-justify-between pd-py-4 pd-font-medium pd-transition-all hover:pd-underline [&[data-state=open]>svg]:pd-rotate-180',
            props.class
          ),
        }, () => [
          slots.default?.(),
          h(ChevronDown, {
            class: 'pd-h-4 pd-w-4 pd-shrink-0 pd-transition-transform pd-duration-200',
          }),
        ])
      )
  },
})

const AccordionContent = defineComponent({
  name: 'AccordionContent',
  props: {
    class: { type: String as PropType<string>, default: '' },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h(AccordionContentPrimitive, {
        ...attrs,
        class: 'pd-overflow-hidden pd-text-sm pd-transition-all data-[state=closed]:pd-animate-accordion-up data-[state=open]:pd-animate-accordion-down',
      }, () => h('div', { class: cn('pd-pb-4 pd-pt-0', props.class) }, slots.default?.()))
  },
})

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
