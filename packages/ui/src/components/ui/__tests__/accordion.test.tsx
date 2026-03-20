import * as React from "react";
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../accordion'

describe('Accordion Component', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
      </Accordion>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('renders correctly and opens', async () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Trigger</AccordionTrigger>
          <AccordionContent>Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    )

    const trigger = screen.getByText('Trigger')
    expect(trigger).toBeInTheDocument()
    
    fireEvent.click(trigger)
    expect(await screen.findByText('Content')).toBeInTheDocument()
  })
})
