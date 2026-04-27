import { defineComponent, h, type PropType, type Component } from 'vue'
import { Toaster as Sonner, type ToasterProps as SonnerProps } from 'vue-sonner'
import { cn } from 'pd-shad-ui/lib/utils'

const Toaster: Component<any> = defineComponent({
  name: 'Toaster',
  props: {
    class: { type: String, default: '' },
    position: { type: String as PropType<SonnerProps['position']>, default: 'bottom-right' },
    theme: { type: String as PropType<SonnerProps['theme']>, default: 'light' },
    richColors: { type: Boolean, default: false },
    expand: { type: Boolean, default: false },
    duration: { type: Number, default: 4000 },
    gap: { type: Number, default: 14 },
    visibleToasts: { type: Number, default: 3 },
    closeButton: { type: Boolean, default: false },
    toastOptions: { type: Object as PropType<SonnerProps['toastOptions']>, default: () => ({}) },
    className: { type: String, default: '' },
    style: { type: Object as PropType<SonnerProps['style']>, default: () => ({}) },
    offset: { type: [String, Number] as PropType<SonnerProps['offset']>, default: 32 },
    dir: { type: String as PropType<SonnerProps['dir']>, default: 'auto' },
    hotkey: { type: Array as PropType<SonnerProps['hotkey']>, default: () => ['altKey', 'KeyT'] },
    invert: { type: Boolean, default: false },
    themeProvider: { type: Object, default: undefined },
    containerAriaLabel: { type: String, default: 'Notifications' },
    pauseWhenPageIsHidden: { type: Boolean, default: false },
  },
  setup(props, { attrs }) {
    return () =>
      h(Sonner as any, {
        ...attrs,
        class: cn('pd-toaster group', props.class),
        position: props.position,
        theme: props.theme,
        richColors: props.richColors,
        expand: props.expand,
        duration: props.duration,
        gap: props.gap,
        visibleToasts: props.visibleToasts,
        closeButton: props.closeButton,
        toastOptions: {
          ...props.toastOptions,
          classes: {
            toast:
              'group pd-toast group-[.toaster]:pd-bg-background group-[.toaster]:pd-text-foreground group-[.toaster]:pd-border-border group-[.toaster]:pd-shadow-lg',
            description: 'group-[.toast]:pd-text-muted-foreground',
            actionButton:
              'group-[.toast]:pd-bg-primary group-[.toast]:pd-text-primary-foreground',
            cancelButton:
              'group-[.toast]:pd-bg-muted group-[.toast]:pd-text-muted-foreground',
            ...(props.toastOptions as any)?.classes,
          },
        },
      })
  },
})

export { Toaster }
