import { h, defineComponent } from 'vue'
import { cn } from 'pd-shad-ui/vue'

export const Ul = defineComponent({
  name: 'Ul',
  props: { class: { type: String, default: '' } },
  setup(props, { slots, attrs }) {
    return () => h('ul', {
      ...attrs,
      class: cn('pd-my-6 pd-ml-6 pd-list-disc [&>li]:pd-mt-2', props.class)
    }, slots.default?.())
  }
})

export const Ol = defineComponent({
  name: 'Ol',
  props: { class: { type: String, default: '' } },
  setup(props, { slots, attrs }) {
    return () => h('ol', {
      ...attrs,
      class: cn('pd-my-6 pd-ml-6 pd-list-decimal [&>li]:pd-mt-2', props.class)
    }, slots.default?.())
  }
})

export const Li = defineComponent({
  name: 'Li',
  props: { class: { type: String, default: '' } },
  setup(props, { slots, attrs }) {
    return () => h('li', {
      ...attrs,
      class: cn('pd-leading-7', props.class)
    }, slots.default?.())
  }
})
