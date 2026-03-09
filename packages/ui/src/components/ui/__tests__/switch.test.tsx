import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import { Switch } from '../switch'

describe('Switch Component', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(
      <label>
        <Switch id="airplane-mode" />
        Airplane Mode
      </label>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('renders correctly and toggles', () => {
    render(<Switch id="test" />)
    const sw = screen.getByRole('switch')
    
    expect(sw).toHaveAttribute('data-state', 'unchecked')
    fireEvent.click(sw)
    expect(sw).toHaveAttribute('data-state', 'checked')
  })

  it('is disabled when the disabled prop is passed', () => {
    render(<Switch disabled />)
    expect(screen.getByRole('switch')).toBeDisabled()
  })
})
