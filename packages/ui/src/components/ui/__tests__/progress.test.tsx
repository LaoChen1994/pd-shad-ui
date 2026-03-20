import * as React from "react";
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import { Progress } from '../progress'

describe('Progress Component', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(<Progress value={33} aria-label="Progress" />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('renders correctly with value', () => {
    const { container } = render(<Progress value={50} />)
    const indicator = container.querySelector('div[style*="translateX(-50%)"]')
    expect(indicator).toBeInTheDocument()
  })
})
