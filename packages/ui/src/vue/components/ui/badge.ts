import { h, defineComponent, type PropType } from 'vue'
import { type VariantProps } from 'class-variance-authority'
import { cn } from 'pd-shad-ui/lib/utils'
import { badgeVariants } from 'pd-shad-ui/variants/badge'

export interface BadgeProps {
  variant?: VariantProps<typeof badgeVariants>['variant']
  class?: string
}

const Badge = defineComponent({
  name: 'Badge',
  props: {
    variant: { type: String as PropType<BadgeProps['variant']>, default: 'default' },
    class: { type: String as PropType<string>, default: '' },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h('div', {
        ...attrs,
        class: cn(badgeVariants({ variant: props.variant }), props.class),
      }, slots.default?.())
  },
})

export { Badge, badgeVariants }
