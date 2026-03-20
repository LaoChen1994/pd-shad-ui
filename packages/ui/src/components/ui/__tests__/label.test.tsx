import * as React from "react";
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import { Label } from '../label'

describe('Label Component', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(<Label>Label Text</Label>)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('renders correctly with children', () => {
    render(<Label>Username</Label>)
    expect(screen.getByText('Username')).toBeInTheDocument()
  })
})
