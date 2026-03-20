import * as React from "react";
import { render, screen } from '@testing-library/react'
import { Code, Pre } from '../code'
import { describe, it, expect } from 'vitest'
import React from 'react'

describe('Code Components', () => {
  it('renders Code correctly', () => {
    render(<Code>const x = 1</Code>)
    const element = screen.getByText('const x = 1')
    expect(element.tagName).toBe('CODE')
    expect(element).toHaveClass('pd-font-mono')
  })

  it('renders Pre correctly', () => {
    render(<Pre>block</Pre>)
    const element = screen.getByText('block')
    expect(element.tagName).toBe('PRE')
  })
})
