import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Toaster } from '../sonner'

describe('Sonner Component', () => {
  it('renders correctly', () => {
    const { container } = render(<Toaster />)
    // Sonner renders a section with an ol
    const toaster = container.querySelector('section')
    expect(toaster).toBeInTheDocument()
  })
})
