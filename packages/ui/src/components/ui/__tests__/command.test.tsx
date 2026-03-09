import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '../command'

describe('Command Component', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(
      <Command>
        <CommandInput placeholder="Type a command..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Calendar</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('renders command input and items', () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem>Calendar</CommandItem>
          <CommandItem>Search</CommandItem>
        </CommandList>
      </Command>
    )

    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument()
    expect(screen.getByText('Calendar')).toBeInTheDocument()
    expect(screen.getByText('Search')).toBeInTheDocument()
  })
})
