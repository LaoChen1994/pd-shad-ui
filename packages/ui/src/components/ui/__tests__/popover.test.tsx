import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../popover'

describe('Popover Component', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Content</PopoverContent>
      </Popover>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('renders content when clicked', async () => {
    const user = userEvent.setup()
    render(
      <Popover>
        <PopoverTrigger>Open Popover</PopoverTrigger>
        <PopoverContent>Popover Content</PopoverContent>
      </Popover>
    )

    const trigger = screen.getByText('Open Popover')
    await user.click(trigger)

    expect(await screen.findByText('Popover Content')).toBeInTheDocument()
  })
})
