import { defineComponent, h, type Component, type PropType } from 'vue'
import { PinInputRoot, PinInputInput } from 'radix-vue'
import { Dot } from 'lucide-vue-next'
import { cn } from 'pd-shad-ui/lib/utils'

const InputOTP: Component<any> = defineComponent({
  name: 'InputOTP',
  props: { class: { type: String, default: '' }, containerClass: { type: String, default: '' } },
  setup(props, { slots, attrs }) {
    return () =>
      h(PinInputRoot as any, {
        ...attrs,
        class: cn('pd-flex pd-items-center pd-gap-2 has-[:disabled]:pd-opacity-50', props.containerClass),
      }, slots.default?.())
  },
})

const InputOTPGroup: Component<any> = defineComponent({
  name: 'InputOTPGroup',
  props: { class: { type: String, default: '' } },
  setup(props, { slots, attrs }) {
    return () =>
      h('div', {
        ...attrs,
        class: cn('pd-flex pd-items-center', props.class)
      }, slots.default?.())
  },
})

const InputOTPSlot: Component<any> = defineComponent({
  name: 'InputOTPSlot',
  props: { class: { type: String, default: '' }, index: { type: Number, required: true } },
  setup(props, { attrs }) {
    return () =>
      h(PinInputInput as any, {
        ...attrs,
        index: props.index,
        class: cn(
          'pd-relative pd-flex pd-h-10 pd-w-10 pd-items-center pd-justify-center pd-border-y pd-border-r pd-border-input pd-text-sm pd-transition-all first:pd-rounded-l-md first:pd-border-l last:pd-rounded-r-md focus-visible:pd-z-10 focus-visible:pd-ring-2 focus-visible:pd-ring-ring focus-visible:pd-ring-offset-background pd-bg-background pd-text-center pd-outline-none',
          props.class
        )
      })
  },
})

const InputOTPSeparator: Component<any> = defineComponent({
  name: 'InputOTPSeparator',
  props: { class: { type: String, default: '' } },
  setup(props, { attrs }) {
    return () =>
      h('div', {
        ...attrs,
        role: 'separator',
        class: props.class,
      }, () => [h(Dot)])
  },
})

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
