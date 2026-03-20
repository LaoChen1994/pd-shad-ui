import * as React from "react";
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { axe } from 'vitest-axe'
import { useForm } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../form'
import { Input } from '../input'

const TestForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
  const form = useForm({
    defaultValues: {
      username: '',
    },
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Username" {...field} />
              </FormControl>
              <FormDescription>Display name</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <button type="submit">Submit</button>
      </form>
    </Form>
  )
}

describe('Form Component', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(<TestForm onSubmit={() => {}} />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('submits correctly', async () => {
    const handleSubmit = vi.fn()
    render(<TestForm onSubmit={handleSubmit} />)

    fireEvent.change(screen.getByPlaceholderText('Username'), {
      target: { value: 'johndoe' },
    })
    fireEvent.click(screen.getByText('Submit'))

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledWith(
        expect.objectContaining({ username: 'johndoe' }),
        expect.anything()
      )
    })
  })
})
