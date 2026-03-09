import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import { Separator } from '../separator'

describe('Separator Component', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(<Separator />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('renders correctly', () => {
    const { container } = render(<Separator />)
    expect(container.firstChild).toHaveClass('pd-shrink-0')
  })

  it('handles orientation prop', () => {
    const { container } = render(<Separator orientation="vertical" />)
    expect(container.firstChild).toHaveAttribute('data-orientation', 'vertical')
  })
})
