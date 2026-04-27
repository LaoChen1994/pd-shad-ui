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
import { sheetVariants } from 'pd-shad-ui/variants/sheet'
import type { VariantProps } from 'class-variance-authority'

const Sheet = defineComponent({
  name: 'Sheet',
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

const SheetPortal = DialogPortal

const SheetTrigger = defineComponent({
  name: 'SheetTrigger',
  props: { asChild: { type: Boolean, default: false } },
  setup(props, { slots, attrs }) {
    return () => h(DialogTriggerPrimitive, { ...attrs, asChild: props.asChild }, slots)
  },
})

const SheetClose = defineComponent({
  name: 'SheetClose',
  props: { asChild: { type: Boolean, default: false } },
  setup(props, { slots, attrs }) {
    return () => h(DialogClosePrimitive, { ...attrs, asChild: props.asChild }, slots)
  },
})

const SheetOverlay = defineComponent({
  name: 'SheetOverlay',
  props: { class: { type: String as PropType<string>, default: '' } },
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

const SheetContent = defineComponent({
  name: 'SheetContent',
  props: {
    class: { type: String as PropType<string>, default: '' },
    side: { type: String as PropType<VariantProps<typeof sheetVariants>['side']>, default: 'right' },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h(DialogPortal, {}, () => [
        h(SheetOverlay),
        h(DialogContentPrimitive, {
          ...attrs,
          class: cn(sheetVariants({ side: props.side }), props.class),
        }, () => [
          slots.default?.(),
          h(DialogClosePrimitive, {
            class: 'pd-absolute pd-right-4 pd-top-4 pd-rounded-sm pd-opacity-70 pd-ring-offset-background pd-transition-opacity hover:pd-opacity-100 focus:pd-outline-none focus:pd-ring-2 focus:pd-ring-ring focus:pd-ring-offset-2 disabled:pd-pointer-events-none data-[state=open]:pd-bg-secondary',
          }, () => [
            h(X, { class: 'pd-h-4 pd-w-4' }),
            h('span', { class: 'pd-sr-only' }, 'Close'),
          ]),
        ]),
      ])
  },
})

const SheetHeader = defineComponent({
  name: 'SheetHeader',
  props: { class: { type: String as PropType<string>, default: '' } },
  setup(props, { slots, attrs }) {
    return () =>
      h('div', {
        ...attrs,
        class: cn('pd-flex pd-flex-col pd-space-y-2 pd-text-center sm:pd-text-left', props.class),
      }, slots.default?.())
  },
})

const SheetFooter = defineComponent({
  name: 'SheetFooter',
  props: { class: { type: String as PropType<string>, default: '' } },
  setup(props, { slots, attrs }) {
    return () =>
      h('div', {
        ...attrs,
        class: cn('pd-flex pd-flex-col-reverse sm:pd-flex-row sm:pd-justify-end sm:pd-space-x-2', props.class),
      }, slots.default?.())
  },
})

const SheetTitle = defineComponent({
  name: 'SheetTitle',
  props: { class: { type: String as PropType<string>, default: '' } },
  setup(props, { slots, attrs }) {
    return () =>
      h(DialogTitlePrimitive, {
        ...attrs,
        class: cn('pd-text-lg pd-font-semibold pd-text-foreground', props.class),
      }, slots)
  },
})

const SheetDescription = defineComponent({
  name: 'SheetDescription',
  props: { class: { type: String as PropType<string>, default: '' } },
  setup(props, { slots, attrs }) {
    return () =>
      h(DialogDescriptionPrimitive, {
        ...attrs,
        class: cn('pd-text-sm pd-text-muted-foreground', props.class),
      }, slots)
  },
})

export {
  Sheet,
  SheetPortal,
  SheetTrigger,
  SheetClose,
  SheetOverlay,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
