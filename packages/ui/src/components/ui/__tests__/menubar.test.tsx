import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '../menubar'

describe('Menubar Component', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New Tab</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('renders menu items when triggered', async () => {
    const user = userEvent.setup()
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New Window</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )

    const trigger = screen.getByText('File')
    await user.click(trigger)

    expect(await screen.findByText('New Window')).toBeInTheDocument()
  })
})
