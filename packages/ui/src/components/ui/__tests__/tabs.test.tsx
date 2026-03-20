import * as React from "react";
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../tabs'

describe('Tabs Component', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(
      <Tabs defaultValue="account" className="pd-w-[400px]">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">Account content</TabsContent>
        <TabsContent value="password">Password content</TabsContent>
      </Tabs>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('renders correctly and switches tabs', async () => {
    const user = userEvent.setup()
    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content 1</TabsContent>
        <TabsContent value="tab2">Content 2</TabsContent>
      </Tabs>
    )

    expect(screen.getByText('Content 1')).toBeInTheDocument()
    
    const trigger2 = screen.getByText('Tab 2')
    await user.click(trigger2)
    
    expect(await screen.findByText('Content 2')).toBeInTheDocument()
  })
})
