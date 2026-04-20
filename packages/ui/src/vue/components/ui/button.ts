import { h, defineComponent, type PropType } from 'vue'
import { Primitive, type PrimitiveProps } from 'radix-vue'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../../lib/utils'

const buttonVariants = cva(
  'pd-inline-flex pd-items-center pd-justify-center pd-whitespace-nowrap pd-rounded-md pd-text-sm pd-font-medium pd-ring-offset-background pd-transition-colors focus-visible:pd-outline-none focus-visible:pd-ring-2 focus-visible:pd-ring-ring focus-visible:pd-ring-offset-2 disabled:pd-pointer-events-none disabled:pd-opacity-50',
  {
    variants: {
      variant: {
        default: 'pd-bg-primary pd-text-primary-foreground hover:pd-bg-primary/90',
        destructive:
          'pd-bg-destructive pd-text-destructive-foreground hover:pd-bg-destructive/90',
        outline:
          'pd-border pd-border-input pd-bg-background hover:pd-bg-accent hover:pd-text-accent-foreground',
        secondary:
          'pd-bg-secondary pd-text-secondary-foreground hover:pd-bg-secondary/80',
        ghost: 'hover:pd-bg-accent hover:pd-text-accent-foreground',
        link: 'pd-text-primary pd-underline-offset-4 hover:pd-underline',
      },
      size: {
        default: 'pd-h-10 pd-px-4 pd-py-2',
        sm: 'pd-h-9 pd-rounded-md pd-px-3',
        lg: 'pd-h-11 pd-rounded-md pd-px-8',
        icon: 'pd-h-10 pd-w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

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
