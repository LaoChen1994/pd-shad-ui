import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '../context-menu'

describe('ContextMenu Component', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(
      <ContextMenu>
        <ContextMenuTrigger>Right click me</ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Item 1</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('renders menu items on right click', () => {
    render(
      <ContextMenu>
        <ContextMenuTrigger>Trigger</ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Menu Item</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    )

    const trigger = screen.getByText('Trigger')
    fireEvent.contextMenu(trigger)

    expect(screen.getByText('Menu Item')).toBeInTheDocument()
  })
})
