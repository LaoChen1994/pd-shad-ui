import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '../table'

describe('Table Component', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>INV001</TableCell>
            <TableCell>Paid</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('renders correctly with content', () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Cell Data</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    )

    expect(screen.getByText('Cell Data')).toBeInTheDocument()
  })
})
