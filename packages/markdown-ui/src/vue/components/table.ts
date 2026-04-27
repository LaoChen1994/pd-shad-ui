import { h, defineComponent } from 'vue'
import { cn } from 'pd-shad-ui/vue'

export const MarkdownTable = defineComponent({
  name: 'MarkdownTable',
  props: { class: { type: String, default: '' } },
  setup(props, { slots, attrs }) {
    return () => h('div', { class: 'pd-my-6 pd-w-full pd-overflow-y-auto' }, [
      h('table', {
        ...attrs,
        class: cn('pd-w-full pd-overflow-hidden pd-rounded-md', props.class)
      }, slots.default?.())
    ])
  }
})

export const MarkdownTableHeader = defineComponent({
  name: 'MarkdownTableHeader',
  props: { class: { type: String, default: '' } },
  setup(props, { slots, attrs }) {
    return () => h('thead', {
      ...attrs,
      class: cn('pd-bg-muted', props.class)
    }, slots.default?.())
  }
})

export const MarkdownTableBody = defineComponent({
  name: 'MarkdownTableBody',
  props: { class: { type: String, default: '' } },
  setup(props, { slots, attrs }) {
    return () => h('tbody', {
      ...attrs,
      class: cn('pd-divide-y pd-divide-border', props.class)
    }, slots.default?.())
  }
})

export const MarkdownTableFooter = defineComponent({
  name: 'MarkdownTableFooter',
  props: { class: { type: String, default: '' } },
  setup(props, { slots, attrs }) {
    return () => h('tfoot', {
      ...attrs,
      class: cn('pd-bg-muted pd-font-medium', props.class)
    }, slots.default?.())
  }
})

export const MarkdownTableRow = defineComponent({
  name: 'MarkdownTableRow',
  props: { class: { type: String, default: '' } },
  setup(props, { slots, attrs }) {
    return () => h('tr', {
      ...attrs,
      class: cn('pd-m-0 pd-border-t pd-p-0 even:pd-bg-muted/50', props.class)
    }, slots.default?.())
  }
})

export const MarkdownTableHead = defineComponent({
  name: 'MarkdownTableHead',
  props: { class: { type: String, default: '' } },
  setup(props, { slots, attrs }) {
    return () => h('th', {
      ...attrs,
      class: cn(
        'pd-border pd-px-4 pd-py-2 pd-text-left pd-font-bold [&[align=center]]:pd-text-center [&[align=right]]:pd-text-right',
        props.class
      )
    }, slots.default?.())
  }
})

export const MarkdownTableCell = defineComponent({
  name: 'MarkdownTableCell',
  props: { class: { type: String, default: '' } },
  setup(props, { slots, attrs }) {
    return () => h('td', {
      ...attrs,
      class: cn(
        'pd-border pd-px-4 pd-py-2 pd-text-left [&[align=center]]:pd-text-center [&[align=right]]:pd-text-right',
        props.class
      )
    }, slots.default?.())
  }
})
