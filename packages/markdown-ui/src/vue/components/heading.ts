import { h, defineComponent } from 'vue'
import { cn } from 'pd-shad-ui/vue'

export const H1 = defineComponent({
  name: 'H1',
  props: { class: { type: String, default: '' } },
  setup(props, { slots, attrs }) {
    return () => h('h1', {
      ...attrs,
      class: cn('pd-scroll-m-20 pd-text-4xl pd-font-extrabold pd-tracking-tight lg:pd-text-5xl pd-mb-6', props.class)
    }, slots.default?.())
  }
})

export const H2 = defineComponent({
  name: 'H2',
  props: { class: { type: String, default: '' } },
  setup(props, { slots, attrs }) {
    return () => h('h2', {
      ...attrs,
      class: cn('pd-scroll-m-20 pd-border-b pd-pb-2 pd-text-3xl pd-font-semibold pd-tracking-tight pd-first:mt-0 pd-mt-10 pd-mb-4', props.class)
    }, slots.default?.())
  }
})

export const H3 = defineComponent({
  name: 'H3',
  props: { class: { type: String, default: '' } },
  setup(props, { slots, attrs }) {
    return () => h('h3', {
      ...attrs,
      class: cn('pd-scroll-m-20 pd-text-2xl pd-font-semibold pd-tracking-tight pd-mt-8 pd-mb-4', props.class)
    }, slots.default?.())
  }
})

export const H4 = defineComponent({
  name: 'H4',
  props: { class: { type: String, default: '' } },
  setup(props, { slots, attrs }) {
    return () => h('h4', {
      ...attrs,
      class: cn('pd-scroll-m-20 pd-text-xl pd-font-semibold pd-tracking-tight pd-mt-6 pd-mb-2', props.class)
    }, slots.default?.())
  }
})

export const H5 = defineComponent({
  name: 'H5',
  props: { class: { type: String, default: '' } },
  setup(props, { slots, attrs }) {
    return () => h('h5', {
      ...attrs,
      class: cn('pd-scroll-m-20 pd-text-lg pd-font-semibold pd-tracking-tight pd-mt-4 pd-mb-2', props.class)
    }, slots.default?.())
  }
})

export const H6 = defineComponent({
  name: 'H6',
  props: { class: { type: String, default: '' } },
  setup(props, { slots, attrs }) {
    return () => h('h6', {
      ...attrs,
      class: cn('pd-scroll-m-20 pd-text-base pd-font-semibold pd-tracking-tight pd-mt-4 pd-mb-2', props.class)
    }, slots.default?.())
  }
})
