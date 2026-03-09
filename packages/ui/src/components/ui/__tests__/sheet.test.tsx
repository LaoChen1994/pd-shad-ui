import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../sheet'

describe('Sheet Component', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Title</SheetTitle>
            <SheetDescription>Description</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()

    // Open it
    fireEvent.click(screen.getByText('Open'))
    
    // Check open state (ignore aria-hidden-focus due to Radix guards)
    const openResults = await axe(document.body, {
      rules: {
        'aria-hidden-focus': { enabled: false },
      },
    })
    expect(openResults).toHaveNoViolations()
  })

  it('renders correctly when triggered', () => {
    render(
      <Sheet>
        <SheetTrigger>Trigger</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Sheet Header</SheetTitle>
            <SheetDescription>Description</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    )

    fireEvent.click(screen.getByText('Trigger'))
    expect(screen.getByText('Sheet Header')).toBeInTheDocument()
  })
})
