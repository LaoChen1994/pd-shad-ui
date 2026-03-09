import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import { Toggle } from '../toggle'

describe('Toggle Component', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(<Toggle aria-label="Toggle">Toggle</Toggle>)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('toggles state when clicked', () => {
    render(<Toggle>Toggle Me</Toggle>)
    const toggle = screen.getByText('Toggle Me')
    
    expect(toggle).toHaveAttribute('data-state', 'off')
    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('data-state', 'on')
  })
})
