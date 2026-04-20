import { h, defineComponent } from 'vue'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeRaw from 'rehype-raw'
import rehypeKatex from 'rehype-katex'

export const defaultMarkdownPlugins = {
  remark: [remarkGfm, remarkMath],
  rehype: [rehypeRaw, rehypeKatex],
}

export { remarkGfm, remarkMath, rehypeRaw, rehypeKatex }

export const Markdown = defineComponent({
  name: 'Markdown',
  props: {
    content: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: '',
    },
  },
  setup(props: { content: string, className: string }) {
    // 实际生产中这里会集成 markdown 编译逻辑
    // 为了演示，我们先输出一个 div 容器
    return () =>
      h('div', { class: ['pd-markdown', props.className] }, [
        h('pre', {}, props.content)
      ])
  },
})
