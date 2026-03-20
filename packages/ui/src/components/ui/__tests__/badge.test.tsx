import * as React from "react";
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import { Badge } from '../badge'

describe('Badge Component', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(<Badge>New</Badge>)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('renders correctly with children', () => {
    render(<Badge>Badge Label</Badge>)
    expect(screen.getByText('Badge Label')).toBeInTheDocument()
  })

  it('applies variant classes correctly', () => {
    const { container } = render(<Badge variant="destructive">Destructive</Badge>)
    expect(container.firstChild).toHaveClass('pd-bg-destructive')
  })
})
