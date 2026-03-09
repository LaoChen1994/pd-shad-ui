import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { axe } from 'vitest-axe'
import { Calendar } from '../calendar'

describe('Calendar Component', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(<Calendar />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('renders correctly', () => {
    render(<Calendar />)
    // Check if some day of the week is rendered (default react-day-picker behavior)
    expect(screen.getByText('Su')).toBeInTheDocument()
  })

  it('handles date selection', () => {
    const handleSelect = vi.fn()
    // We use a fixed date to make test predictable
    const today = new Date(2024, 0, 1) // Jan 1, 2024
    render(<Calendar mode="single" selected={today} onSelect={handleSelect} />)
    
    // Find a day and click it. react-day-picker uses buttons for days.
    // Let's find "15"
    const day15 = screen.getByText('15')
    fireEvent.click(day15)
    
    expect(handleSelect).toHaveBeenCalled()
  })
})
