import * as React from "react";
import { render, screen } from '@testing-library/react'
import { Ul, Ol, Li } from '../list'
import { describe, it, expect } from 'vitest'
import React from 'react'

describe('List Components', () => {
  it('renders Ul correctly', () => {
    render(
      <Ul>
        <Li>Item 1</Li>
      </Ul>
    )
    const ul = screen.getByRole('list')
    expect(ul).toHaveClass('pd-list-disc')
    expect(screen.getByText('Item 1')).toBeInTheDocument()
  })

  it('renders Ol correctly', () => {
    render(
      <Ol>
        <Li>Item 1</Li>
      </Ol>
    )
    const ol = screen.getByRole('list')
    expect(ol).toHaveClass('pd-list-decimal')
  })
})
