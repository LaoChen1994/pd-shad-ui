import { h, defineComponent, type PropType } from 'vue'
import {
  AlertDialogRoot,
  AlertDialogTrigger as AlertDialogTriggerPrimitive,
  AlertDialogPortal,
  AlertDialogOverlay as AlertDialogOverlayPrimitive,
  AlertDialogContent as AlertDialogContentPrimitive,
  AlertDialogTitle as AlertDialogTitlePrimitive,
  AlertDialogDescription as AlertDialogDescriptionPrimitive,
  AlertDialogAction as AlertDialogActionPrimitive,
  AlertDialogCancel as AlertDialogCancelPrimitive,
} from 'radix-vue'
import { cn } from 'pd-shad-ui/lib/utils'
import { buttonVariants } from 'pd-shad-ui/variants/button'

const AlertDialog = defineComponent({
  name: 'AlertDialog',
  props: {
    open: { type: Boolean, default: undefined },
    defaultOpen: { type: Boolean, default: undefined },
  },
  emits: ['update:open'],
  setup(props, { slots, emit }) {
    return () =>
      h(AlertDialogRoot, {
        open: props.open,
        defaultOpen: props.defaultOpen,
        'onUpdate:open': (val: boolean) => emit('update:open', val),
      }, slots)
  },
})

const AlertDialogTrigger = defineComponent({
  name: 'AlertDialogTrigger',
  props: { asChild: { type: Boolean, default: false } },
  setup(props, { slots, attrs }) {
    return () => h(AlertDialogTriggerPrimitive, { ...attrs, asChild: props.asChild }, slots)
  },
})

const AlertDialogOverlay = defineComponent({
  name: 'AlertDialogOverlay',
  props: { class: { type: String as PropType<string>, default: '' } },
  setup(props, { attrs }) {
    return () =>
      h(AlertDialogOverlayPrimitive, {
        ...attrs,
        class: cn(
          'pd-fixed pd-inset-0 pd-z-50 pd-bg-black/80 data-[state=open]:pd-animate-in data-[state=closed]:pd-animate-out data-[state=closed]:pd-fade-out-0 data-[state=open]:pd-fade-in-0',
          props.class
        ),
      })
  },
})

const AlertDialogContent = defineComponent({
  name: 'AlertDialogContent',
  props: { class: { type: String as PropType<string>, default: '' } },
  setup(props, { slots, attrs }) {
    return () =>
      h(AlertDialogPortal, {}, () => [
        h(AlertDialogOverlay),
        h(AlertDialogContentPrimitive, {
          ...attrs,
          class: cn(
            'pd-fixed pd-left-[50%] pd-top-[50%] pd-z-50 pd-grid pd-w-full pd-max-w-lg pd-translate-x-[-50%] pd-translate-y-[-50%] pd-gap-4 pd-border pd-bg-background pd-p-6 pd-shadow-lg pd-duration-200 data-[state=open]:pd-animate-in data-[state=closed]:pd-animate-out data-[state=closed]:pd-fade-out-0 data-[state=open]:pd-fade-in-0 data-[state=closed]:pd-zoom-out-95 data-[state=open]:pd-zoom-in-95 data-[side=bottom]:pd-slide-in-from-top-2 data-[side=left]:pd-slide-in-from-right-2 data-[side=right]:pd-slide-in-from-left-2 data-[side=top]:pd-slide-in-from-bottom-2 sm:pd-rounded-lg',
            props.class
          ),
        }, slots),
      ])
  },
})

const AlertDialogHeader = defineComponent({
  name: 'AlertDialogHeader',
  props: { class: { type: String as PropType<string>, default: '' } },
  setup(props, { slots, attrs }) {
    return () =>
      h('div', {
        ...attrs,
        class: cn('pd-flex pd-flex-col pd-space-y-2 pd-text-center sm:pd-text-left', props.class),
      }, slots.default?.())
  },
})

const AlertDialogFooter = defineComponent({
  name: 'AlertDialogFooter',
  props: { class: { type: String as PropType<string>, default: '' } },
  setup(props, { slots, attrs }) {
    return () =>
      h('div', {
        ...attrs,
        class: cn('pd-flex pd-flex-col-reverse sm:pd-flex-row sm:pd-justify-end sm:pd-space-x-2', props.class),
      }, slots.default?.())
  },
})

const AlertDialogTitle = defineComponent({
  name: 'AlertDialogTitle',
  props: { class: { type: String as PropType<string>, default: '' } },
  setup(props, { slots, attrs }) {
    return () =>
      h(AlertDialogTitlePrimitive, {
        ...attrs,
        class: cn('pd-text-lg pd-font-semibold', props.class),
      }, slots)
  },
})

const AlertDialogDescription = defineComponent({
  name: 'AlertDialogDescription',
  props: { class: { type: String as PropType<string>, default: '' } },
  setup(props, { slots, attrs }) {
    return () =>
      h(AlertDialogDescriptionPrimitive, {
        ...attrs,
        class: cn('pd-text-sm pd-text-muted-foreground', props.class),
      }, slots)
  },
})

const AlertDialogAction = defineComponent({
  name: 'AlertDialogAction',
  props: { class: { type: String as PropType<string>, default: '' } },
  setup(props, { slots, attrs }) {
    return () =>
      h(AlertDialogActionPrimitive, {
        ...attrs,
        class: cn(buttonVariants(), props.class),
      }, slots)
  },
})

const AlertDialogCancel = defineComponent({
  name: 'AlertDialogCancel',
  props: { class: { type: String as PropType<string>, default: '' } },
  setup(props, { slots, attrs }) {
    return () =>
      h(AlertDialogCancelPrimitive, {
        ...attrs,
        class: cn(buttonVariants({ variant: 'outline' }), 'pd-mt-2 sm:pd-mt-0', props.class),
      }, slots)
  },
})

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}
