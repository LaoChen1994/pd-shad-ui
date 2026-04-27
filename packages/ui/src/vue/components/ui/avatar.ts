import { h, defineComponent, type PropType } from 'vue'
import { AvatarRoot, AvatarImage as AvatarImagePrimitive, AvatarFallback as AvatarFallbackPrimitive } from 'radix-vue'
import { cn } from 'pd-shad-ui/lib/utils'

const Avatar = defineComponent({
  name: 'Avatar',
  props: {
    class: { type: String as PropType<string>, default: '' },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h(AvatarRoot, {
        ...attrs,
        class: cn(
          'pd-relative pd-flex pd-h-10 pd-w-10 pd-shrink-0 pd-overflow-hidden pd-rounded-full',
          props.class
        ),
      }, slots)
  },
})

const AvatarImage = defineComponent({
  name: 'AvatarImage',
  props: {
    class: { type: String as PropType<string>, default: '' },
    src: { type: String as PropType<string>, default: undefined },
    alt: { type: String as PropType<string>, default: undefined },
  },
  setup(props, { attrs }) {
    return () =>
      h(AvatarImagePrimitive, {
        ...attrs,
        src: props.src as any,
        alt: props.alt as any,
        class: cn('pd-aspect-square pd-h-full pd-w-full', props.class),
      })
  },
})

const AvatarFallback = defineComponent({
  name: 'AvatarFallback',
  props: {
    class: { type: String as PropType<string>, default: '' },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h(AvatarFallbackPrimitive, {
        ...attrs,
        class: cn(
          'pd-flex pd-h-full pd-w-full pd-items-center pd-justify-center pd-rounded-full pd-bg-muted',
          props.class
        ),
      }, slots)
  },
})

export { Avatar, AvatarImage, AvatarFallback }
