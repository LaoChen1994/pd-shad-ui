import { defineComponent, h, ref, provide, inject, onMounted, onUnmounted, watch, unref, type PropType, type Component, type Ref } from 'vue'
import emblaCarouselVue from 'embla-carousel-vue'
import type { EmblaCarouselVueType } from 'embla-carousel-vue'
import { ArrowLeft, ArrowRight } from 'lucide-vue-next'
import { cn } from 'pd-shad-ui/lib/utils'
import { Button } from './button'

type CarouselApi = EmblaCarouselVueType[1]
type UseCarouselParameters = Parameters<typeof emblaCarouselVue>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: 'horizontal' | 'vertical'
}

type CarouselContextProps = {
  carouselRef: EmblaCarouselVueType[0]
  api: CarouselApi
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: Ref<boolean>
  canScrollNext: Ref<boolean>
  orientation: 'horizontal' | 'vertical'
}

const CarouselContextKey = Symbol('CarouselContext')

function getCarouselContext() {
  const context = inject<CarouselContextProps>(CarouselContextKey)
  if (!context) {
    throw new Error('getCarouselContext must be used within a <Carousel />')
  }
  return context
}

const Carousel: Component<any> = defineComponent({
  name: 'Carousel',
  props: {
    opts: { type: Object as PropType<CarouselOptions>, default: () => ({}) },
    plugins: { type: Array as PropType<CarouselPlugin>, default: () => [] },
    orientation: { type: String as PropType<'horizontal' | 'vertical'>, default: 'horizontal' },
    class: { type: String, default: '' },
  },
  emits: ['init', 'update:api'],
  setup(props, { slots, emit, attrs }) {
    const [carouselRef, api] = emblaCarouselVue(
      {
        ...unref(props.opts),
        axis: props.orientation === 'horizontal' ? 'x' : 'y',
      },
      props.plugins
    )

    const canScrollPrev = ref(false)
    const canScrollNext = ref(false)

    const onSelect = (apiInstance: CarouselApi['value']) => {
      if (!apiInstance) return
      canScrollPrev.value = apiInstance.canScrollPrev()
      canScrollNext.value = apiInstance.canScrollNext()
    }

    const scrollPrev = () => {
      api.value?.scrollPrev()
    }

    const scrollNext = () => {
      api.value?.scrollNext()
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        scrollPrev()
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        scrollNext()
      }
    }

    watch(api, (newApi) => {
      if (!newApi) return
      emit('init', newApi)
      emit('update:api', newApi)
      onSelect(newApi)
      newApi.on('reInit', () => onSelect(newApi))
      newApi.on('select', () => onSelect(newApi))
    }, { immediate: true })

    provide(CarouselContextKey, {
      carouselRef,
      api,
      scrollPrev,
      scrollNext,
      canScrollPrev,
      canScrollNext,
      orientation: props.orientation || (unref(props.opts)?.axis === 'y' ? 'vertical' : 'horizontal'),
    })

    return () =>
      h('div', {
        ...attrs,
        class: cn('pd-relative', props.class),
        role: 'region',
        'aria-roledescription': 'carousel',
        onKeydownCapture: handleKeyDown,
      }, slots.default?.())
  },
})

const CarouselContent = defineComponent({
  name: 'CarouselContent',
  props: { class: { type: String, default: '' } },
  setup(props, { slots, attrs }) {
    const { carouselRef, orientation } = getCarouselContext()

    return () =>
      h('div', { ref: carouselRef as any, class: 'pd-overflow-hidden' }, [
        h('div', {
          ...attrs,
          class: cn(
            'pd-flex',
            orientation === 'horizontal' ? 'pd--ml-4' : 'pd--mt-4 pd-flex-col',
            props.class
          ),
        }, slots.default?.())
      ])
  },
})

const CarouselItem = defineComponent({
  name: 'CarouselItem',
  props: { class: { type: String, default: '' } },
  setup(props, { slots, attrs }) {
    const { orientation } = getCarouselContext()

    return () =>
      h('div', {
        ...attrs,
        role: 'group',
        'aria-roledescription': 'slide',
        class: cn(
          'pd-min-w-0 pd-shrink-0 pd-grow-0 pd-basis-full',
          orientation === 'horizontal' ? 'pd-pl-4' : 'pd-pt-4',
          props.class
        ),
      }, slots.default?.())
  },
})

const CarouselPrevious = defineComponent({
  name: 'CarouselPrevious',
  props: {
    class: { type: String, default: '' },
    variant: { type: String, default: 'outline' },
    size: { type: String, default: 'icon' },
  },
  setup(props, { attrs }) {
    const { orientation, scrollPrev, canScrollPrev } = getCarouselContext()

    return () =>
      h(Button, {
        ...attrs,
        variant: props.variant as any,
        size: props.size as any,
        class: cn(
          'pd-absolute pd-h-8 pd-w-8 pd-rounded-full',
          orientation === 'horizontal'
            ? 'pd--left-12 pd-top-1/2 pd--translate-y-1/2'
            : 'pd--top-12 pd-left-1/2 pd--translate-x-1/2 pd-rotate-90',
          props.class
        ),
        disabled: !canScrollPrev.value,
        onClick: scrollPrev,
      }, () => [
        h(ArrowLeft, { class: 'pd-h-4 pd-w-4' }),
        h('span', { class: 'pd-sr-only' }, 'Previous slide')
      ])
  },
})

const CarouselNext = defineComponent({
  name: 'CarouselNext',
  props: {
    class: { type: String, default: '' },
    variant: { type: String, default: 'outline' },
    size: { type: String, default: 'icon' },
  },
  setup(props, { attrs }) {
    const { orientation, scrollNext, canScrollNext } = getCarouselContext()

    return () =>
      h(Button, {
        ...attrs,
        variant: props.variant as any,
        size: props.size as any,
        class: cn(
          'pd-absolute pd-h-8 pd-w-8 pd-rounded-full',
          orientation === 'horizontal'
            ? 'pd--right-12 pd-top-1/2 pd--translate-y-1/2'
            : 'pd--bottom-12 pd-left-1/2 pd--translate-x-1/2 pd-rotate-90',
          props.class
        ),
        disabled: !canScrollNext.value,
        onClick: scrollNext,
      }, () => [
        h(ArrowRight, { class: 'pd-h-4 pd-w-4' }),
        h('span', { class: 'pd-sr-only' }, 'Next slide')
      ])
  },
})

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
}
