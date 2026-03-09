import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import { Slider } from '../slider'

describe('Slider Component', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(
      <Slider defaultValue={[50]} max={100} step={1} aria-label="Slider" />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('renders correctly', () => {
    const { container } = render(
      <Slider defaultValue={[20]} max={100} aria-label="Slider" />
    )
    // Check for presence of slider primitives
    const slider = container.querySelector('span[data-orientation="horizontal"]')
    expect(slider).toBeInTheDocument()
  })
})
