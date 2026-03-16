import { render, screen } from '@testing-library/react'
import { H1, H2, H3, H4, H5, H6 } from '../heading'
import { describe, it, expect } from 'vitest'
import React from 'react'

describe('Heading Components', () => {
  it('renders H1 correctly', () => {
    render(<H1>Title</H1>)
    const element = screen.getByText('Title')
    expect(element.tagName).toBe('H1')
    expect(element).toHaveClass('pd-text-4xl')
  })

  it('renders H2 correctly', () => {
    render(<H2>SubTitle</H2>)
    const element = screen.getByText('SubTitle')
    expect(element.tagName).toBe('H2')
    expect(element).toHaveClass('pd-text-3xl')
  })

  it('renders with custom className', () => {
    render(<H1 className="custom">Title</H1>)
    expect(screen.getByText('Title')).toHaveClass('custom')
  })
})
