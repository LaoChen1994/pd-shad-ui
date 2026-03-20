import * as React from "react";
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import { Input } from '../input'

describe('Input Component', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(<Input aria-label="Email" />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('renders correctly', () => {
    render(<Input placeholder="Enter email" />)
    expect(screen.getByPlaceholderText('Enter email')).toBeInTheDocument()
  })

  it('handles value changes', () => {
    render(<Input placeholder="Input" />)
    const input = screen.getByPlaceholderText('Input') as HTMLInputElement
    fireEvent.change(input, { target: { value: 'test@example.com' } })
    expect(input.value).toBe('test@example.com')
  })

  it('is disabled when the disabled prop is passed', () => {
    render(<Input disabled />)
    expect(screen.getByRole('textbox')).toBeDisabled()
  })
})
