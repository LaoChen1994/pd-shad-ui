import { defineComponent, h, type PropType, type Component, computed } from 'vue'
import {
  CalendarRoot,
  CalendarCell,
  CalendarCellTrigger,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHead,
  CalendarGridRow,
  CalendarHeadCell,
  CalendarHeader,
  CalendarHeading,
  CalendarNext,
  CalendarPrev,
  type CalendarRootProps,
  type CalendarRootEmits,
} from 'radix-vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { cn } from 'pd-shad-ui/lib/utils'
import { buttonVariants } from './button'

const Calendar: Component<any> = defineComponent({
  name: 'Calendar',
  props: {
    class: { type: String, default: '' },
    locale: { type: String, default: 'en-US' },
    weekdayFormat: { type: String as PropType<'short' | 'long' | 'narrow'>, default: 'short' },
    minValue: { type: Object as PropType<any> },
    maxValue: { type: Object as PropType<any> },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    multiple: { type: Boolean, default: false },
    fixedWeeks: { type: Boolean, default: false },
    preventDeselect: { type: Boolean, default: false },
    pagedNavigation: { type: Boolean, default: false },
    modelValue: { type: [Object, Array] as PropType<any> },
    placeholder: { type: Object as PropType<any> },
    dir: { type: String as PropType<'ltr' | 'rtl'> },
    initialFocus: { type: Boolean, default: false },
  },
  emits: ['update:modelValue', 'update:placeholder'],
  setup(props, { attrs, emit, slots }) {
    return () =>
      h(CalendarRoot, {
        ...attrs,
        class: cn('pd-p-3', props.class),
        locale: props.locale,
        weekdayFormat: props.weekdayFormat,
        minValue: props.minValue,
        maxValue: props.maxValue,
        disabled: props.disabled,
        readonly: props.readonly,
        multiple: props.multiple as any,
        fixedWeeks: props.fixedWeeks,
        preventDeselect: props.preventDeselect,
        pagedNavigation: props.pagedNavigation,
        modelValue: props.modelValue,
        placeholder: props.placeholder,
        dir: props.dir,
        initialFocus: props.initialFocus,
        'onUpdate:modelValue': (v: any) => emit('update:modelValue', v),
        'onUpdate:placeholder': (v: any) => emit('update:placeholder', v),
      }, {
        default: ({ grid, weekDays }: any) => [
          h(CalendarHeader, { class: 'pd-flex pd-justify-center pd-pt-1 pd-relative pd-items-center' }, () => [
            h(CalendarPrev, {
              class: cn(
                buttonVariants({ variant: 'outline' }),
                'pd-h-7 pd-w-7 pd-bg-transparent pd-p-0 pd-opacity-50 hover:pd-opacity-100 pd-absolute pd-left-1'
              )
            }, () => [h(ChevronLeft, { class: 'pd-h-4 pd-w-4' })]),
            
            h(CalendarHeading, { class: 'pd-text-sm pd-font-medium' }),
            
            h(CalendarNext, {
              class: cn(
                buttonVariants({ variant: 'outline' }),
                'pd-h-7 pd-w-7 pd-bg-transparent pd-p-0 pd-opacity-50 hover:pd-opacity-100 pd-absolute pd-right-1'
              )
            }, () => [h(ChevronRight, { class: 'pd-h-4 pd-w-4' })]),
          ]),
          
          h('div', { class: 'pd-flex pd-flex-col sm:pd-flex-row pd-space-y-4 sm:pd-space-x-4 sm:pd-space-y-0 pd-mt-4' }, [
            grid.map((month: any) => 
              h(CalendarGrid, { key: month.value.toString(), class: 'pd-w-full pd-border-collapse pd-space-y-1' }, () => [
                h(CalendarGridHead, null, () => [
                  h(CalendarGridRow, { class: 'pd-flex' }, () => 
                    weekDays.map((day: any) => 
                      h(CalendarHeadCell, { 
                        key: day,
                        class: 'pd-text-muted-foreground pd-rounded-md pd-w-9 pd-font-normal pd-text-[0.8rem]' 
                      }, () => day)
                    )
                  )
                ]),
                h(CalendarGridBody, null, () => [
                  month.rows.map((weekDays: any, index: number) => 
                    h(CalendarGridRow, { key: `week-${index}`, class: 'pd-flex pd-w-full pd-mt-2' }, () => 
                      weekDays.map((weekDay: any) => 
                        h(CalendarCell, { 
                          key: weekDay.value.toString(),
                          date: weekDay.value,
                          class: cn(
                            'pd-h-9 pd-w-9 pd-text-center pd-text-sm pd-p-0 pd-relative',
                            '[&:has([data-selected])]:pd-bg-accent first:[&:has([data-selected])]:pd-rounded-l-md last:[&:has([data-selected])]:pd-rounded-r-md focus-within:pd-relative focus-within:pd-z-20',
                            '[&:has([data-outside-view][data-selected])]:pd-bg-accent/50'
                          )
                        }, () => [
                          h(CalendarCellTrigger, {
                            day: weekDay,
                            month: month.value,
                            class: cn(
                              buttonVariants({ variant: 'ghost' }),
                              'pd-h-9 pd-w-9 pd-p-0 pd-font-normal',
                              '[data-selected]:pd-opacity-100 [data-selected]:pd-bg-primary [data-selected]:pd-text-primary-foreground',
                              '[data-today]:pd-bg-accent [data-today]:pd-text-accent-foreground',
                              '[data-outside-view]:pd-text-muted-foreground [data-outside-view]:pd-opacity-50',
                              '[data-disabled]:pd-text-muted-foreground [data-disabled]:pd-opacity-50'
                            )
                          })
                        ])
                      )
                    )
                  )
                ])
              ])
            )
          ])
        ]
      })
  },
})

export { Calendar }
