import { h, defineComponent, type PropType } from 'vue'
import { AspectRatio as AspectRatioPrimitive } from 'radix-vue'

const AspectRatio = defineComponent({
  name: 'AspectRatio',
  props: {
    ratio: { type: Number as PropType<number>, default: 1 },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h(AspectRatioPrimitive, {
        ...attrs,
        ratio: props.ratio,
      }, slots)
  },
})

export { AspectRatio }
