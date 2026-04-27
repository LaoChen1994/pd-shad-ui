import { h, defineComponent, type PropType } from 'vue'
import {
  NavigationMenuRoot,
  NavigationMenuList as NavigationMenuListPrimitive,
  NavigationMenuItem as NavigationMenuItemPrimitive,
  NavigationMenuTrigger as NavigationMenuTriggerPrimitive,
  NavigationMenuContent as NavigationMenuContentPrimitive,
  NavigationMenuLink as NavigationMenuLinkPrimitive,
  NavigationMenuViewport as NavigationMenuViewportPrimitive,
  NavigationMenuIndicator as NavigationMenuIndicatorPrimitive,
} from 'radix-vue'
import { cva } from 'class-variance-authority'
import { ChevronDown } from 'lucide-vue-next'
import { cn } from 'pd-shad-ui/lib/utils'

const NavigationMenuViewport = defineComponent({
  name: 'NavigationMenuViewport',
  props: { class: { type: String as PropType<string>, default: '' } },
  setup(props, { attrs }) {
    return () =>
      h('div', { class: cn('pd-absolute pd-left-0 pd-top-full pd-flex pd-justify-center') }, () =>
        h(NavigationMenuViewportPrimitive, {
          ...attrs,
          class: cn(
            'pd-origin-top-center pd-relative pd-mt-1.5 pd-h-[var(--radix-navigation-menu-viewport-height)] pd-w-full pd-overflow-hidden pd-rounded-md pd-border pd-bg-popover pd-text-popover-foreground pd-shadow-lg data-[state=open]:pd-animate-in data-[state=closed]:pd-animate-out data-[state=open]:pd-zoom-in-90 data-[state=closed]:pd-zoom-out-95 md:pd-w-[var(--radix-navigation-menu-viewport-width)]',
            props.class
          ),
        })
      )
  },
})

const NavigationMenu = defineComponent({
  name: 'NavigationMenu',
  props: { class: { type: String as PropType<string>, default: '' } },
  setup(props, { slots, attrs }) {
    return () =>
      h(NavigationMenuRoot, {
        ...attrs,
        class: cn(
          'pd-relative pd-z-10 pd-flex pd-max-w-max pd-flex-1 pd-items-center pd-justify-center',
          props.class
        ),
      }, () => [
        slots.default?.(),
        h(NavigationMenuViewport),
      ])
  },
})

const NavigationMenuList = defineComponent({
  name: 'NavigationMenuList',
  props: { class: { type: String as PropType<string>, default: '' } },
  setup(props, { slots, attrs }) {
    return () =>
      h(NavigationMenuListPrimitive, {
        ...attrs,
        class: cn(
          'group pd-flex pd-flex-1 pd-list-none pd-items-center pd-justify-center pd-space-x-1',
          props.class
        ),
      }, slots)
  },
})

const NavigationMenuItem = defineComponent({
  name: 'NavigationMenuItem',
  setup(_props, { slots }) {
    return () => h(NavigationMenuItemPrimitive, {}, slots)
  },
})

const navigationMenuTriggerStyle = cva(
  'group pd-inline-flex pd-h-10 pd-w-max pd-items-center pd-justify-center pd-rounded-md pd-bg-background pd-px-4 pd-py-2 pd-text-sm pd-font-medium pd-transition-colors hover:pd-bg-accent hover:pd-text-accent-foreground focus:pd-bg-accent focus:pd-text-accent-foreground focus:pd-outline-none disabled:pd-pointer-events-none disabled:pd-opacity-50 data-[active]:pd-bg-accent/50 data-[state=open]:pd-bg-accent/50'
)

const NavigationMenuTrigger = defineComponent({
  name: 'NavigationMenuTrigger',
  props: { class: { type: String as PropType<string>, default: '' } },
  setup(props, { slots, attrs }) {
    return () =>
      h(NavigationMenuTriggerPrimitive, {
        ...attrs,
        class: cn(navigationMenuTriggerStyle(), 'group', props.class),
      }, () => [
        slots.default?.(),
        h(ChevronDown, {
          class: 'pd-relative pd-top-[1px] pd-ml-1 pd-h-3 pd-w-3 pd-transition pd-duration-200 group-data-[state=open]:pd-rotate-180',
          'aria-hidden': 'true',
        }),
      ])
  },
})

const NavigationMenuContent = defineComponent({
  name: 'NavigationMenuContent',
  props: { class: { type: String as PropType<string>, default: '' } },
  setup(props, { slots, attrs }) {
    return () =>
      h(NavigationMenuContentPrimitive, {
        ...attrs,
        class: cn(
          'pd-left-0 pd-top-0 pd-w-full data-[motion^=from-]:pd-animate-in data-[motion^=to-]:pd-animate-out data-[motion^=from-]:pd-fade-in data-[motion^=to-]:pd-fade-out data-[motion=from-end]:pd-slide-in-from-right-52 data-[motion=from-start]:pd-slide-in-from-left-52 data-[motion=to-end]:pd-slide-out-to-right-52 data-[motion=to-start]:pd-slide-out-to-left-52 md:pd-absolute md:pd-w-auto ',
          props.class
        ),
      }, slots)
  },
})

const NavigationMenuLink = defineComponent({
  name: 'NavigationMenuLink',
  setup(_props, { slots, attrs }) {
    return () => h(NavigationMenuLinkPrimitive, { ...attrs }, slots)
  },
})

const NavigationMenuIndicator = defineComponent({
  name: 'NavigationMenuIndicator',
  props: { class: { type: String as PropType<string>, default: '' } },
  setup(props, { attrs }) {
    return () =>
      h(NavigationMenuIndicatorPrimitive, {
        ...attrs,
        class: cn(
          'pd-top-full pd-z-[1] pd-flex pd-h-1.5 pd-items-end pd-justify-center pd-overflow-hidden data-[state=visible]:pd-animate-in data-[state=hidden]:pd-animate-out data-[state=visible]:pd-fade-in data-[state=hidden]:pd-fade-out',
          props.class
        ),
      }, () => h('div', { class: 'pd-relative pd-top-[60%] pd-h-2 pd-w-2 pd-rotate-45 pd-rounded-tl-sm pd-bg-border pd-shadow-md' }))
  },
})

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
}
