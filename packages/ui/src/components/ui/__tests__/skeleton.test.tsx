import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import { Skeleton } from '../skeleton'

describe('Skeleton Component', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(<Skeleton className="pd-h-4 pd-w-[200px]" />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('renders correctly with classes', () => {
    const { container } = render(<Skeleton className="test-class" />)
    expect(container.firstChild).toHaveClass('test-class')
    expect(container.firstChild).toHaveClass('pd-animate-pulse')
  })
})
