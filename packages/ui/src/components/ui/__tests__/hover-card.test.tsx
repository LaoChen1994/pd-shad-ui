import * as React from "react";
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '../hover-card'

describe('HoverCard Component', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(
      <HoverCard>
        <HoverCardTrigger>Hover me</HoverCardTrigger>
        <HoverCardContent>Content</HoverCardContent>
      </HoverCard>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('renders content on hover', async () => {
    const user = userEvent.setup()
    render(
      <HoverCard openDelay={0}>
        <HoverCardTrigger>Hover</HoverCardTrigger>
        <HoverCardContent>Hover Content</HoverCardContent>
      </HoverCard>
    )

    const trigger = screen.getByText('Hover')
    await user.hover(trigger)

    expect(await screen.findByText('Hover Content')).toBeInTheDocument()
  })
})
