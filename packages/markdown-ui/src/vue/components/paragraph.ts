import { h, defineComponent } from 'vue'
import { cn } from 'pd-shad-ui/vue'

export const P = defineComponent({
  name: 'P',
  props: { class: { type: String, default: '' } },
  setup(props, { slots, attrs }) {
    return () => h('p', {
      ...attrs,
      class: cn('pd-leading-7 [&:not(:first-child)]:pd-mt-6 pd-mb-4', props.class)
    }, slots.default?.())
  }
})

export const Blockquote = defineComponent({
  name: 'Blockquote',
  props: { class: { type: String, default: '' } },
  setup(props, { slots, attrs }) {
    return () => h('blockquote', {
      ...attrs,
      class: cn('pd-mt-6 pd-border-l-2 pd-pl-6 pd-italic', props.class)
    }, slots.default?.())
  }
})
