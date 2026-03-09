import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../select'

describe('Select Component', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(
      <Select>
        <SelectTrigger aria-label="Select">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
        </SelectContent>
      </Select>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('renders options when clicked', async () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="orange">Orange</SelectItem>
        </SelectContent>
      </Select>
    )

    const trigger = screen.getByText('Select fruit')
    fireEvent.click(trigger)

    expect(await screen.findByText('Orange')).toBeInTheDocument()
  })
})
