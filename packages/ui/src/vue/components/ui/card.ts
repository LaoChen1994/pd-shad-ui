import { h, defineComponent, type PropType } from 'vue'
import { cn } from 'pd-shad-ui/lib/utils'

const Card = defineComponent({
  name: 'Card',
  props: {
    class: { type: String as PropType<string>, default: '' },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h('div', {
        ...attrs,
        class: cn('pd-rounded-lg pd-border pd-bg-card pd-text-card-foreground pd-shadow-sm', props.class),
      }, slots.default?.())
  },
})

const CardHeader = defineComponent({
  name: 'CardHeader',
  props: {
    class: { type: String as PropType<string>, default: '' },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h('div', {
        ...attrs,
        class: cn('pd-flex pd-flex-col pd-space-y-1.5 pd-p-6', props.class),
      }, slots.default?.())
  },
})

const CardTitle = defineComponent({
  name: 'CardTitle',
  props: {
    class: { type: String as PropType<string>, default: '' },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h('h3', {
        ...attrs,
        class: cn('pd-text-2xl pd-font-semibold pd-leading-none pd-tracking-tight', props.class),
      }, slots.default?.())
  },
})

const CardDescription = defineComponent({
  name: 'CardDescription',
  props: {
    class: { type: String as PropType<string>, default: '' },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h('p', {
        ...attrs,
        class: cn('pd-text-sm pd-text-muted-foreground', props.class),
      }, slots.default?.())
  },
})

const CardContent = defineComponent({
  name: 'CardContent',
  props: {
    class: { type: String as PropType<string>, default: '' },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h('div', {
        ...attrs,
        class: cn('pd-p-6 pd-pt-0', props.class),
      }, slots.default?.())
  },
})

const CardFooter = defineComponent({
  name: 'CardFooter',
  props: {
    class: { type: String as PropType<string>, default: '' },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h('div', {
        ...attrs,
        class: cn('pd-flex pd-items-center pd-p-6 pd-pt-0', props.class),
      }, slots.default?.())
  },
})

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
