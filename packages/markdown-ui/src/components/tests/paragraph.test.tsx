import * as React from "react";
import { render, screen } from '@testing-library/react'
import { P, Blockquote } from '../paragraph'
import { describe, it, expect } from 'vitest'
import React from 'react'

describe('Paragraph Components', () => {
  it('renders P correctly', () => {
    render(<P>Hello World</P>)
    const element = screen.getByText('Hello World')
    expect(element.tagName).toBe('P')
    expect(element).toHaveClass('pd-leading-7')
  })

  it('renders Blockquote correctly', () => {
    render(<Blockquote>Quote</Blockquote>)
    const element = screen.getByText('Quote')
    expect(element.tagName).toBe('BLOCKQUOTE')
    expect(element).toHaveClass('pd-italic')
  })
})
