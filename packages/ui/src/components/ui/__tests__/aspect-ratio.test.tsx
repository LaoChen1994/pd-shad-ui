import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import { AspectRatio } from '../aspect-ratio'

describe('AspectRatio Component', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(
      <AspectRatio ratio={16 / 9}>
        <img src="test.jpg" alt="test" />
      </AspectRatio>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('renders children correctly', () => {
    const { getByAltText } = render(
      <AspectRatio ratio={1}>
        <img src="test.jpg" alt="test image" />
      </AspectRatio>
    )
    expect(getByAltText('test image')).toBeInTheDocument()
  })
})
