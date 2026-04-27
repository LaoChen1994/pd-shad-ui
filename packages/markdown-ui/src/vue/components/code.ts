import { h, defineComponent, ref, onMounted, onUnmounted, type PropType } from 'vue'
import { cn } from 'pd-shad-ui/vue'
import { Check, Copy } from 'lucide-vue-next'
import { createHighlighter, type Highlighter } from 'shiki'

// Global highlighter instance to avoid re-initializing
let highlighterPromise: Promise<Highlighter> | null = null

function getHighlighter() {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ['github-dark', 'github-light'],
      langs: ['typescript', 'javascript', 'tsx', 'jsx', 'bash', 'json', 'markdown', 'css', 'html'],
    })
  }
  return highlighterPromise
}

const CodeBlock = defineComponent({
  name: 'CodeBlock',
  props: {
    language: { type: String, required: true },
    code: { type: String, required: true },
  },
  setup(props) {
    const html = ref<string>('')
    const copied = ref(false)

    onMounted(() => {
      let isMounted = true
      getHighlighter().then((highlighter) => {
        if (isMounted) {
          const highlighted = highlighter.codeToHtml(props.code, {
            lang: props.language,
            theme: 'github-dark',
          })
          html.value = highlighted
        }
      })
      return () => { isMounted = false }
    })

    const copyToClipboard = () => {
      navigator.clipboard.writeText(props.code)
      copied.value = true
      setTimeout(() => { copied.value = false }, 2000)
    }

    return () =>
      h('div', { class: 'pd-group pd-relative pd-my-6 pd-overflow-hidden pd-rounded-lg pd-border pd-bg-muted' }, [
        h('div', { class: 'pd-absolute pd-right-4 pd-top-4 pd-z-10 pd-opacity-0 pd-transition-opacity group-hover:pd-opacity-100' }, [
          h('button', {
            onClick: copyToClipboard,
            class: 'pd-flex pd-h-8 pd-w-8 pd-items-center pd-justify-center pd-rounded-md pd-border pd-bg-background pd-text-foreground hover:pd-bg-accent',
            'aria-label': 'Copy code',
          }, [
            copied.value
              ? h(Check, { class: 'pd-h-4 pd-w-4 pd-text-green-500' })
              : h(Copy, { class: 'pd-h-4 pd-w-4' })
          ])
        ]),
        
        html.value
          ? h('div', {
              class: 'pd-overflow-x-auto pd-p-4 pd-text-sm [&>pre]:!pd-bg-transparent [&>pre]:!pd-p-0',
              innerHTML: html.value,
            })
          : h('pre', { class: 'pd-overflow-x-auto pd-p-4 pd-text-sm pd-font-mono' }, [
              h('code', null, props.code)
            ]),
            
        props.language
          ? h('div', { class: 'pd-absolute pd-bottom-2 pd-right-4 pd-text-xs pd-font-mono pd-text-muted-foreground/50 pd-pointer-events-none' }, props.language)
          : null
      ])
  }
})

export const Code = defineComponent({
  name: 'Code',
  props: { class: { type: String, default: '' } },
  setup(props, { slots, attrs }) {
    return () => {
      const isInline = !props.class.includes('language-')
      
      if (isInline) {
        return h('code', {
          ...attrs,
          class: cn(
            'pd-relative pd-rounded pd-bg-muted pd-px-[0.3rem] pd-py-[0.2rem] pd-font-mono pd-text-sm pd-font-semibold',
            props.class
          )
        }, slots.default?.())
      }

      const language = props.class.replace('language-', '')
      // Extract text content from slots
      let codeText = ''
      if (slots.default) {
        const vnodes = slots.default()
        if (vnodes.length > 0 && typeof vnodes[0].children === 'string') {
          codeText = vnodes[0].children
        } else if (vnodes.length > 0 && typeof vnodes[0] === 'string') {
          codeText = vnodes[0]
        }
      }
      return h(CodeBlock, { language, code: String(codeText).trim() })
    }
  }
})

export const Pre = defineComponent({
  name: 'Pre',
  props: { class: { type: String, default: '' } },
  setup(props, { slots, attrs }) {
    return () => h('div', {
      ...attrs,
      class: cn('pd-pre-wrapper', props.class)
    }, slots.default?.())
  }
})
