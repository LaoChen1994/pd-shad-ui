import { h, defineComponent, type PropType } from 'vue'
import { ChevronRight, MoreHorizontal } from 'lucide-vue-next'
import { cn } from 'pd-shad-ui/lib/utils'

const Breadcrumb = defineComponent({
  name: 'Breadcrumb',
  setup(_props, { slots, attrs }) {
    return () =>
      h('nav', { ...attrs, 'aria-label': 'breadcrumb' }, slots.default?.())
  },
})

const BreadcrumbList = defineComponent({
  name: 'BreadcrumbList',
  props: {
    class: { type: String as PropType<string>, default: '' },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h('ol', {
        ...attrs,
        class: cn(
          'pd-flex pd-flex-wrap pd-items-center pd-gap-1.5 pd-break-words pd-text-sm pd-text-muted-foreground sm:pd-gap-2.5',
          props.class
        ),
      }, slots.default?.())
  },
})

const BreadcrumbItem = defineComponent({
  name: 'BreadcrumbItem',
  props: {
    class: { type: String as PropType<string>, default: '' },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h('li', {
        ...attrs,
        class: cn('pd-inline-flex pd-items-center pd-gap-1.5', props.class),
      }, slots.default?.())
  },
})

const BreadcrumbLink = defineComponent({
  name: 'BreadcrumbLink',
  props: {
    class: { type: String as PropType<string>, default: '' },
    href: { type: String as PropType<string>, default: undefined },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h('a', {
        ...attrs,
        href: props.href,
        class: cn('pd-transition-colors hover:pd-text-foreground', props.class),
      }, slots.default?.())
  },
})

const BreadcrumbPage = defineComponent({
  name: 'BreadcrumbPage',
  props: {
    class: { type: String as PropType<string>, default: '' },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h('span', {
        ...attrs,
        role: 'link',
        'aria-disabled': 'true',
        'aria-current': 'page',
        class: cn('pd-font-normal pd-text-foreground', props.class),
      }, slots.default?.())
  },
})

const BreadcrumbSeparator = defineComponent({
  name: 'BreadcrumbSeparator',
  props: {
    class: { type: String as PropType<string>, default: '' },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h('li', {
        ...attrs,
        role: 'presentation',
        'aria-hidden': 'true',
        class: cn('[&>svg]:pd-size-3.5', props.class),
      }, slots.default?.() ?? [h(ChevronRight)])
  },
})

const BreadcrumbEllipsis = defineComponent({
  name: 'BreadcrumbEllipsis',
  props: {
    class: { type: String as PropType<string>, default: '' },
  },
  setup(props, { attrs }) {
    return () =>
      h('span', {
        ...attrs,
        role: 'presentation',
        'aria-hidden': 'true',
        class: cn('pd-flex pd-h-9 pd-w-9 pd-items-center pd-justify-center', props.class),
      }, [
        h(MoreHorizontal, { class: 'pd-h-4 pd-w-4' }),
        h('span', { class: 'pd-sr-only' }, 'More'),
      ])
  },
})

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}
