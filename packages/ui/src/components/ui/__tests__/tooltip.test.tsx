import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../tooltip'

describe('Tooltip Component', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover</TooltipTrigger>
          <TooltipContent>Tooltip content</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('renders content on hover', async () => {
    const user = userEvent.setup()
    render(
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>Hover</TooltipTrigger>
          <TooltipContent>Content</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )

    const trigger = screen.getByText('Hover')
    await user.hover(trigger)

    expect(await screen.findByRole('tooltip')).toHaveTextContent('Content')
  })
})
