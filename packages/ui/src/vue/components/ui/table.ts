import { h, defineComponent, type PropType } from 'vue'
import { cn } from 'pd-shad-ui/lib/utils'

const Table = defineComponent({
  name: 'Table',
  props: {
    class: { type: String as PropType<string>, default: '' },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h('div', { class: 'pd-relative pd-w-full pd-overflow-auto' }, [
        h('table', {
          ...attrs,
          class: cn('pd-w-full pd-caption-bottom pd-text-sm', props.class),
        }, slots.default?.()),
      ])
  },
})

const TableHeader = defineComponent({
  name: 'TableHeader',
  props: {
    class: { type: String as PropType<string>, default: '' },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h('thead', {
        ...attrs,
        class: cn('[&_tr]:pd-border-b', props.class),
      }, slots.default?.())
  },
})

const TableBody = defineComponent({
  name: 'TableBody',
  props: {
    class: { type: String as PropType<string>, default: '' },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h('tbody', {
        ...attrs,
        class: cn('[&_tr:last-child]:pd-border-0', props.class),
      }, slots.default?.())
  },
})

const TableFooter = defineComponent({
  name: 'TableFooter',
  props: {
    class: { type: String as PropType<string>, default: '' },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h('tfoot', {
        ...attrs,
        class: cn('pd-border-t pd-bg-muted/50 pd-font-medium [&>tr]:last:pd-border-b-0', props.class),
      }, slots.default?.())
  },
})

const TableRow = defineComponent({
  name: 'TableRow',
  props: {
    class: { type: String as PropType<string>, default: '' },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h('tr', {
        ...attrs,
        class: cn('pd-border-b pd-transition-colors hover:pd-bg-muted/50 data-[state=selected]:pd-bg-muted', props.class),
      }, slots.default?.())
  },
})

const TableHead = defineComponent({
  name: 'TableHead',
  props: {
    class: { type: String as PropType<string>, default: '' },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h('th', {
        ...attrs,
        class: cn('pd-h-12 pd-px-4 pd-text-left pd-align-middle pd-font-medium pd-text-muted-foreground [&:has([role=checkbox])]:pd-pr-0', props.class),
      }, slots.default?.())
  },
})

const TableCell = defineComponent({
  name: 'TableCell',
  props: {
    class: { type: String as PropType<string>, default: '' },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h('td', {
        ...attrs,
        class: cn('pd-p-4 pd-align-middle [&:has([role=checkbox])]:pd-pr-0', props.class),
      }, slots.default?.())
  },
})

const TableCaption = defineComponent({
  name: 'TableCaption',
  props: {
    class: { type: String as PropType<string>, default: '' },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h('caption', {
        ...attrs,
        class: cn('pd-mt-4 pd-text-sm pd-text-muted-foreground', props.class),
      }, slots.default?.())
  },
})

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption }
