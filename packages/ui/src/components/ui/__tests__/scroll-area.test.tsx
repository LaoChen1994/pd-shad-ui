import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import { ScrollArea } from '../scroll-area'

describe('ScrollArea Component', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(
      <ScrollArea className="pd-h-[200px] pd-w-[350px]">
        Content
      </ScrollArea>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('renders content correctly', () => {
    render(
      <ScrollArea className="pd-h-[200px]">
        Long Content
      </ScrollArea>
    )

    expect(screen.getByText('Long Content')).toBeInTheDocument()
  })
})
