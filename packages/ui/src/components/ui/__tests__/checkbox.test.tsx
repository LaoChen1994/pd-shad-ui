import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import { Checkbox } from '../checkbox'

describe('Checkbox Component', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(
      <label>
        <Checkbox id="terms" />
        Accept terms
      </label>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('renders correctly and toggles', () => {
    render(<Checkbox id="test" />)
    const checkbox = screen.getByRole('checkbox')
    
    expect(checkbox).toHaveAttribute('data-state', 'unchecked')
    fireEvent.click(checkbox)
    expect(checkbox).toHaveAttribute('data-state', 'checked')
  })

  it('is disabled when the disabled prop is passed', () => {
    render(<Checkbox disabled />)
    expect(screen.getByRole('checkbox')).toBeDisabled()
  })
})
