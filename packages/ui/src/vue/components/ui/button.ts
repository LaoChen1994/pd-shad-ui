import { h, defineComponent, type PropType } from 'vue'
import { Primitive, type PrimitiveProps } from 'radix-vue'
import { type VariantProps } from 'class-variance-authority'
import { cn } from 'pd-shad-ui/lib/utils'
import { buttonVariants } from 'pd-shad-ui/variants/button'

export interface ButtonProps extends PrimitiveProps {
  variant?: VariantProps<typeof buttonVariants>['variant']
  size?: VariantProps<typeof buttonVariants>['size']
  class?: string
}

const Button = defineComponent({
  name: 'Button',
  props: {
    as: { type: String as PropType<PrimitiveProps['as']>, default: 'button' },
    asChild: { type: Boolean as PropType<PrimitiveProps['asChild']>, default: false },
    variant: { type: String as PropType<ButtonProps['variant']>, default: 'default' },
    size: { type: String as PropType<ButtonProps['size']>, default: 'default' },
    class: { type: String as PropType<string>, default: '' },
  },
  setup(props: ButtonProps, { slots }: { slots: any }) {
    return () =>
      h(
        Primitive,
        {
          as: props.as,
          asChild: props.asChild,
          class: cn(buttonVariants({ variant: props.variant, size: props.size }), props.class),
        },
        slots
      )
  },
})

export { Button, buttonVariants }
