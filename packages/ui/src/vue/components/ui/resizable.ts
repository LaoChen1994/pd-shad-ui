import { defineComponent, h, type Component } from 'vue'
import {
  SplitterGroup,
  SplitterPanel,
  SplitterResizeHandle,
} from 'radix-vue'
import { GripVertical } from 'lucide-vue-next'
import { cn } from 'pd-shad-ui/lib/utils'

const ResizablePanelGroup: Component<any> = defineComponent({
  name: 'ResizablePanelGroup',
  props: { class: { type: String, default: '' }, direction: { type: String, default: 'horizontal' } },
  setup(props, { slots, attrs }) {
    return () =>
      h(SplitterGroup as any, {
        ...attrs,
        direction: props.direction,
        class: cn(
          'pd-flex pd-h-full pd-w-full data-[panel-group-direction=vertical]:pd-flex-col',
          props.class
        ),
      }, slots.default?.())
  },
})

const ResizablePanel: Component<any> = defineComponent({
  name: 'ResizablePanel',
  props: { class: { type: String, default: '' } },
  setup(props, { slots, attrs }) {
    return () =>
      h(SplitterPanel as any, {
        ...attrs,
        class: props.class,
      }, slots.default?.())
  },
})

const ResizableHandle: Component<any> = defineComponent({
  name: 'ResizableHandle',
  props: { class: { type: String, default: '' }, withHandle: { type: Boolean, default: false } },
  setup(props, { attrs }) {
    return () =>
      h(SplitterResizeHandle as any, {
        ...attrs,
        class: cn(
          'pd-relative pd-flex pd-w-px pd-items-center pd-justify-center pd-bg-border after:pd-absolute after:pd-inset-y-0 after:pd-left-1/2 after:pd-w-1 after:pd--translate-x-1/2 focus-visible:pd-outline-none focus-visible:pd-ring-1 focus-visible:pd-ring-ring focus-visible:pd-ring-offset-1 data-[panel-group-direction=vertical]:pd-h-px data-[panel-group-direction=vertical]:pd-w-full data-[panel-group-direction=vertical]:after:pd-inset-x-0 data-[panel-group-direction=vertical]:after:pd-h-1 data-[panel-group-direction=vertical]:after:pd-translate-y-1/2 data-[panel-group-direction=vertical]:after:pd-translate-x-0 [&[data-panel-group-direction=vertical]>div]:pd-rotate-90',
          props.class
        ),
      }, () => [
        props.withHandle
          ? h('div', { class: 'pd-z-10 pd-flex pd-h-4 pd-w-3 pd-items-center pd-justify-center pd-rounded-sm pd-border pd-bg-border' }, [
              h(GripVertical as any, { class: 'pd-h-2.5 pd-w-2.5' })
            ])
          : null
      ])
  },
})

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
