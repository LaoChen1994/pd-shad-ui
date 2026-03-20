import * as React from "react";
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import { ToggleGroup, ToggleGroupItem } from '../toggle-group'

describe('ToggleGroup Component', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(
      <ToggleGroup type="single">
        <ToggleGroupItem value="a" aria-label="A">A</ToggleGroupItem>
        <ToggleGroupItem value="b" aria-label="B">B</ToggleGroupItem>
      </ToggleGroup>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('handles selection correctly', () => {
    render(
      <ToggleGroup type="single">
        <ToggleGroupItem value="left">Left</ToggleGroupItem>
        <ToggleGroupItem value="right">Right</ToggleGroupItem>
      </ToggleGroup>
    )

    const left = screen.getByText('Left')
    fireEvent.click(left)
    expect(left).toHaveAttribute('data-state', 'on')
  })
})
