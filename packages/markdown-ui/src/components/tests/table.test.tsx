import * as React from "react";
import { render, screen } from '@testing-library/react'
import { 
  MarkdownTable, 
  MarkdownTableHeader, 
  MarkdownTableRow, 
  MarkdownTableHead, 
  MarkdownTableBody, 
  MarkdownTableCell 
} from '../table'
import { describe, it, expect } from 'vitest'
import React from 'react'

describe('Table Components', () => {
  it('renders Table structure correctly', () => {
    render(
      <MarkdownTable>
        <MarkdownTableHeader>
          <MarkdownTableRow>
            <MarkdownTableHead>Header</MarkdownTableHead>
          </MarkdownTableRow>
        </MarkdownTableHeader>
        <MarkdownTableBody>
          <MarkdownTableRow>
            <MarkdownTableCell>Cell</MarkdownTableCell>
          </MarkdownTableRow>
        </MarkdownTableBody>
      </MarkdownTable>
    )
    
    expect(screen.getByText('Header')).toBeInTheDocument()
    expect(screen.getByText('Cell')).toBeInTheDocument()
    
    // Check for some shadcn-ui classes if possible, or just roles
    const table = screen.getByRole('table')
    expect(table).toBeInTheDocument()
  })
})
