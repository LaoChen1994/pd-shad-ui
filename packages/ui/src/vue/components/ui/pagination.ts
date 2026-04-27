import { h, defineComponent, type PropType } from 'vue'
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-vue-next'
import { cn } from 'pd-shad-ui/lib/utils'
import { buttonVariants } from 'pd-shad-ui/variants/button'
import type { VariantProps } from 'class-variance-authority'

const Pagination = defineComponent({
  name: 'Pagination',
  props: {
    class: { type: String as PropType<string>, default: '' },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h('nav', {
        ...attrs,
        role: 'navigation',
        'aria-label': 'pagination',
        class: cn('pd-mx-auto pd-flex pd-w-full pd-justify-center', props.class),
      }, slots.default?.())
  },
})

const PaginationContent = defineComponent({
  name: 'PaginationContent',
  props: {
    class: { type: String as PropType<string>, default: '' },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h('ul', {
        ...attrs,
        class: cn('pd-flex pd-flex-row pd-items-center pd-gap-1', props.class),
      }, slots.default?.())
  },
})

const PaginationItem = defineComponent({
  name: 'PaginationItem',
  props: {
    class: { type: String as PropType<string>, default: '' },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h('li', {
        ...attrs,
        class: cn('', props.class),
      }, slots.default?.())
  },
})

const PaginationLink = defineComponent({
  name: 'PaginationLink',
  props: {
    class: { type: String as PropType<string>, default: '' },
    isActive: { type: Boolean, default: false },
    size: { type: String as PropType<VariantProps<typeof buttonVariants>['size']>, default: 'icon' },
    href: { type: String as PropType<string>, default: undefined },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h('a', {
        ...attrs,
        href: props.href,
        'aria-current': props.isActive ? 'page' : undefined,
        class: cn(
          buttonVariants({
            variant: props.isActive ? 'outline' : 'ghost',
            size: props.size,
          }),
          props.class
        ),
      }, slots.default?.())
  },
})

const PaginationPrevious = defineComponent({
  name: 'PaginationPrevious',
  props: {
    class: { type: String as PropType<string>, default: '' },
    href: { type: String as PropType<string>, default: undefined },
    size: { type: String as PropType<VariantProps<typeof buttonVariants>['size']>, default: 'default' },
  },
  setup(props, { attrs }) {
    return () =>
      h(PaginationLink, {
        ...attrs,
        href: props.href,
        'aria-label': 'Go to previous page',
        size: props.size,
        class: cn('pd-gap-1 pd-pl-2.5', props.class),
      }, () => [
        h(ChevronLeft, { class: 'pd-h-4 pd-w-4' }),
        h('span', {}, 'Previous'),
      ])
  },
})

const PaginationNext = defineComponent({
  name: 'PaginationNext',
  props: {
    class: { type: String as PropType<string>, default: '' },
    href: { type: String as PropType<string>, default: undefined },
    size: { type: String as PropType<VariantProps<typeof buttonVariants>['size']>, default: 'default' },
  },
  setup(props, { attrs }) {
    return () =>
      h(PaginationLink, {
        ...attrs,
        href: props.href,
        'aria-label': 'Go to next page',
        size: props.size,
        class: cn('pd-gap-1 pd-pr-2.5', props.class),
      }, () => [
        h('span', {}, 'Next'),
        h(ChevronRight, { class: 'pd-h-4 pd-w-4' }),
      ])
  },
})

const PaginationEllipsis = defineComponent({
  name: 'PaginationEllipsis',
  props: {
    class: { type: String as PropType<string>, default: '' },
  },
  setup(props, { attrs }) {
    return () =>
      h('span', {
        ...attrs,
        'aria-hidden': true,
        class: cn('pd-flex pd-h-9 pd-w-9 pd-items-center pd-justify-center', props.class),
      }, [
        h(MoreHorizontal, { class: 'pd-h-4 pd-w-4' }),
        h('span', { class: 'pd-sr-only' }, 'More pages'),
      ])
  },
})

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
}
