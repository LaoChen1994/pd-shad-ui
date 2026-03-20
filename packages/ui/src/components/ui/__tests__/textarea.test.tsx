import * as React from "react";
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import { Textarea } from '../textarea'

describe('Textarea Component', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(<Textarea aria-label="Message" />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('renders correctly', () => {
    render(<Textarea placeholder="Enter text" />)
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument()
  })

  it('handles value changes', () => {
    render(<Textarea placeholder="Text" />)
    const textarea = screen.getByPlaceholderText('Text') as HTMLTextAreaElement
    fireEvent.change(textarea, { target: { value: 'Hello' } })
    expect(textarea.value).toBe('Hello')
  })

  it('is disabled when the disabled prop is passed', () => {
    render(<Textarea disabled />)
    expect(screen.getByRole('textbox')).toBeDisabled()
  })
})
