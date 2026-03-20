import * as React from "react";
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../pagination'

describe('Pagination Component', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" size="default" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive size="icon">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" size="default" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('renders correctly', () => {
    render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationLink href="#" isActive size="icon">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )

    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('More pages')).toBeInTheDocument()
  })
})
