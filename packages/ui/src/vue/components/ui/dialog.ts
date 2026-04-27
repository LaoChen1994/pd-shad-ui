import { h, defineComponent, type PropType } from 'vue'
import {
  DialogRoot,
  DialogTrigger as DialogTriggerPrimitive,
  DialogPortal,
  DialogClose as DialogClosePrimitive,
  DialogOverlay as DialogOverlayPrimitive,
  DialogContent as DialogContentPrimitive,
  DialogTitle as DialogTitlePrimitive,
  DialogDescription as DialogDescriptionPrimitive,
} from 'radix-vue'
import { X } from 'lucide-vue-next'
import { cn } from 'pd-shad-ui/lib/utils'

const Dialog = defineComponent({
  name: 'Dialog',
  props: {
    open: { type: Boolean, default: undefined },
    defaultOpen: { type: Boolean, default: undefined },
  },
  emits: ['update:open'],
  setup(props, { slots, emit }) {
    return () =>
      h(DialogRoot, {
        open: props.open,
        defaultOpen: props.defaultOpen,
        'onUpdate:open': (val: boolean) => emit('update:open', val),
      }, slots)
  },
})

const DialogTrigger = defineComponent({
  name: 'DialogTrigger',
  props: {
    asChild: { type: Boolean, default: false },
  },
  setup(props, { slots, attrs }) {
    return () => h(DialogTriggerPrimitive, { ...attrs, asChild: props.asChild }, slots)
  },
})

const DialogClose = defineComponent({
  name: 'DialogClose',
  props: {
    asChild: { type: Boolean, default: false },
  },
  setup(props, { slots, attrs }) {
    return () => h(DialogClosePrimitive, { ...attrs, asChild: props.asChild }, slots)
  },
})

const DialogOverlay = defineComponent({
  name: 'DialogOverlay',
  props: {
    class: { type: String as PropType<string>, default: '' },
  },
  setup(props, { attrs }) {
    return () =>
      h(DialogOverlayPrimitive, {
        ...attrs,
        class: cn(
          'pd-fixed pd-inset-0 pd-z-50 pd-bg-black/80 data-[state=open]:pd-animate-in data-[state=closed]:pd-animate-out data-[state=closed]:pd-fade-out-0 data-[state=open]:pd-fade-in-0',
          props.class
        ),
      })
  },
})

const DialogContent = defineComponent({
  name: 'DialogContent',
  props: {
    class: { type: String as PropType<string>, default: '' },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h(DialogPortal, {}, () => [
        h(DialogOverlay),
        h(DialogContentPrimitive, {
          ...attrs,
          class: cn(
            'pd-fixed pd-left-[50%] pd-top-[50%] pd-z-50 pd-grid pd-w-full pd-max-w-lg pd-translate-x-[-50%] pd-translate-y-[-50%] pd-gap-4 pd-border pd-bg-background pd-p-6 pd-shadow-lg pd-duration-200 data-[state=open]:pd-animate-in data-[state=closed]:pd-animate-out data-[state=closed]:pd-fade-out-0 data-[state=open]:pd-fade-in-0 data-[state=closed]:pd-zoom-out-95 data-[state=open]:pd-zoom-in-95 data-[state=closed]:pd-slide-out-to-left-[50%] data-[state=closed]:pd-slide-out-to-top-[48%] data-[state=open]:pd-slide-in-from-left-[50%] data-[state=open]:pd-slide-in-from-top-[48%] sm:pd-rounded-lg',
            props.class
          ),
        }, () => [
          slots.default?.(),
          h(DialogClosePrimitive, {
            class: 'pd-absolute pd-right-4 pd-top-4 pd-rounded-sm pd-opacity-70 pd-ring-offset-background pd-transition-opacity hover:pd-opacity-100 focus:pd-outline-none focus:pd-ring-2 focus:pd-ring-ring focus:pd-ring-offset-2 disabled:pd-pointer-events-none data-[state=open]:pd-bg-accent data-[state=open]:pd-text-muted-foreground',
          }, () => [
            h(X, { class: 'pd-h-4 pd-w-4' }),
            h('span', { class: 'pd-sr-only' }, 'Close'),
          ]),
        ]),
      ])
  },
})

const DialogHeader = defineComponent({
  name: 'DialogHeader',
  props: {
    class: { type: String as PropType<string>, default: '' },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h('div', {
        ...attrs,
        class: cn('pd-flex pd-flex-col pd-space-y-1.5 pd-text-center sm:pd-text-left', props.class),
      }, slots.default?.())
  },
})

const DialogFooter = defineComponent({
  name: 'DialogFooter',
  props: {
    class: { type: String as PropType<string>, default: '' },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h('div', {
        ...attrs,
        class: cn('pd-flex pd-flex-col-reverse sm:pd-flex-row sm:pd-justify-end sm:pd-space-x-2', props.class),
      }, slots.default?.())
  },
})

const DialogTitle = defineComponent({
  name: 'DialogTitle',
  props: {
    class: { type: String as PropType<string>, default: '' },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h(DialogTitlePrimitive, {
        ...attrs,
        class: cn('pd-text-lg pd-font-semibold pd-leading-none pd-tracking-tight', props.class),
      }, slots)
  },
})

const DialogDescription = defineComponent({
  name: 'DialogDescription',
  props: {
    class: { type: String as PropType<string>, default: '' },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h(DialogDescriptionPrimitive, {
        ...attrs,
        class: cn('pd-text-sm pd-text-muted-foreground', props.class),
      }, slots)
  },
})

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
