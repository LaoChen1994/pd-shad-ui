import * as React from "react";
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Code, Pre } from '../code'

describe('Code Components', () => {
  it('renders Code correctly', () => {
    render(<Code>const x = 1</Code>)
    expect(screen.getByText('const x = 1')).toBeDefined()
  })

  it('renders Pre correctly', () => {
    const { container } = render(<Pre>block</Pre>)
    // The Pre component is now a div with pd-pre-wrapper class
    const wrapper = container.querySelector('.pd-pre-wrapper')
    expect(wrapper).toBeDefined()
    expect(wrapper?.textContent).toBe('block')
  })
})
