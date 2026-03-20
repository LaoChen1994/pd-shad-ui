import * as React from "react";
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../dialog'

describe('Dialog Component', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Title</DialogTitle>
            <DialogDescription>Description</DialogDescription>
          </DialogHeader>
          <p>Dialog content</p>
          <DialogFooter>Footer</DialogFooter>
        </DialogContent>
      </Dialog>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()

    // Open it
    fireEvent.click(screen.getByText('Open'))
    
    // Check open state
    const openResults = await axe(document.body, {
      rules: {
        'aria-hidden-focus': { enabled: false },
      },
    })
    expect(openResults).toHaveNoViolations()
  })

  it('renders correctly when triggered', () => {
    render(
      <Dialog>
        <DialogTrigger>Trigger</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog Header</DialogTitle>
            <DialogDescription>Description</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    )

    fireEvent.click(screen.getByText('Trigger'))
    expect(screen.getByText('Dialog Header')).toBeInTheDocument()
  })
})
