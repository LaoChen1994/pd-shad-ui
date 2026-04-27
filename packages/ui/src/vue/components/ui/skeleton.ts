import { h, defineComponent, type PropType } from 'vue'
import { cn } from 'pd-shad-ui/lib/utils'

const Skeleton = defineComponent({
  name: 'Skeleton',
  props: {
    class: { type: String as PropType<string>, default: '' },
  },
  setup(props, { attrs }) {
    return () =>
      h('div', {
        ...attrs,
        class: cn('pd-animate-pulse pd-rounded-md pd-bg-muted', props.class),
      })
  },
})

export { Skeleton }
