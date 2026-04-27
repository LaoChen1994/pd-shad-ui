import {
  Comment,
  cloneVNode,
  computed,
  defineComponent,
  h,
  inject,
  isVNode,
  mergeProps,
  provide,
  type InjectionKey,
  type PropType,
  type VNode,
} from 'vue'
import { Label } from 'pd-shad-ui/vue/components/ui/label'
import { cn } from 'pd-shad-ui/lib/utils'

type FormErrors = Record<string, string | undefined>

interface FormContextValue {
  errors: FormErrors
}

interface FormFieldContextValue {
  name: string
  error?: string
}

interface FormItemContextValue {
  id: string
}

const FormContextKey: InjectionKey<FormContextValue> = Symbol('FormContext')
const FormFieldContextKey: InjectionKey<FormFieldContextValue> = Symbol('FormFieldContext')
const FormItemContextKey: InjectionKey<FormItemContextValue> = Symbol('FormItemContext')

let formItemId = 0

function nextFormItemId() {
  formItemId += 1
  return `pd-form-item-${formItemId}`
}

function useFormField() {
  const fieldContext = inject(FormFieldContextKey, null)
  const itemContext = inject(FormItemContextKey, null)
  const formContext = inject(FormContextKey, { errors: {} })

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>')
  }

  if (!itemContext) {
    throw new Error('useFormField should be used within <FormItem>')
  }

  const error = computed(() => fieldContext.error ?? formContext.errors[fieldContext.name])
  const id = itemContext.id

  return {
    id,
    name: fieldContext.name,
    error,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
  }
}

const Form = defineComponent({
  name: 'Form',
  props: {
    class: { type: String as PropType<string>, default: '' },
    errors: {
      type: Object as PropType<FormErrors>,
      default: () => ({}),
    },
  },
  setup(props, { slots, attrs }) {
    provide(FormContextKey, {
      get errors() {
        return props.errors
      },
    })

    return () =>
      h(
        'form',
        {
          ...attrs,
          class: cn(props.class, attrs.class as string | undefined),
        },
        slots.default?.()
      )
  },
})

const FormField = defineComponent({
  name: 'FormField',
  props: {
    name: { type: String as PropType<string>, required: true },
    error: { type: String as PropType<string | undefined>, default: undefined },
  },
  setup(props, { slots }) {
    provide(FormFieldContextKey, {
      get name() {
        return props.name
      },
      get error() {
        return props.error
      },
    })

    return () => slots.default?.()
  },
})

const FormItem = defineComponent({
  name: 'FormItem',
  props: {
    class: { type: String as PropType<string>, default: '' },
  },
  setup(props, { slots, attrs }) {
    const id = nextFormItemId()

    provide(FormItemContextKey, { id })

    return () =>
      h(
        'div',
        {
          ...attrs,
          class: cn('pd-space-y-2', props.class, attrs.class as string | undefined),
        },
        slots.default?.()
      )
  },
})

const FormLabel = defineComponent({
  name: 'FormLabel',
  props: {
    class: { type: String as PropType<string>, default: '' },
  },
  setup(props, { slots, attrs }) {
    return () => {
      const field = useFormField()
      const forwardedAttrs = attrs as Record<string, unknown>

      return h(
        Label,
        {
          ...forwardedAttrs,
          for: field.formItemId,
          class: cn(field.error.value && 'pd-text-destructive', props.class, forwardedAttrs.class as string | undefined),
        },
        slots.default?.()
      )
    }
  },
})

const FormControl = defineComponent({
  name: 'FormControl',
  setup(_, { slots, attrs }) {
    return () => {
      const field = useFormField()
      const children = (slots.default?.() ?? []).filter((child) => child.type !== Comment)
      const control = children.find((child): child is VNode => isVNode(child))

      if (!control) {
        return null
      }

      const describedBy = field.error.value
        ? `${field.formDescriptionId} ${field.formMessageId}`
        : field.formDescriptionId

      return cloneVNode(
        control,
        mergeProps(control.props ?? {}, attrs, {
          id: field.formItemId,
          'aria-describedby': describedBy,
          'aria-invalid': field.error.value ? 'true' : undefined,
        })
      )
    }
  },
})

const FormDescription = defineComponent({
  name: 'FormDescription',
  props: {
    class: { type: String as PropType<string>, default: '' },
  },
  setup(props, { slots, attrs }) {
    return () => {
      const field = useFormField()

      return h(
        'p',
        {
          ...attrs,
          id: field.formDescriptionId,
          class: cn('pd-text-sm pd-text-muted-foreground', props.class, attrs.class as string | undefined),
        },
        slots.default?.()
      )
    }
  },
})

const FormMessage = defineComponent({
  name: 'FormMessage',
  props: {
    class: { type: String as PropType<string>, default: '' },
  },
  setup(props, { slots, attrs }) {
    return () => {
      const field = useFormField()
      const body = field.error.value ?? slots.default?.()

      if (!body || (Array.isArray(body) && body.length === 0)) {
        return null
      }

      return h(
        'p',
        {
          ...attrs,
          id: field.formMessageId,
          class: cn('pd-text-sm pd-font-medium pd-text-destructive', props.class, attrs.class as string | undefined),
        },
        body
      )
    }
  },
})

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
}
