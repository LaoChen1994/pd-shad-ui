import * as React from "react";
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { axe } from 'vitest-axe'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../carousel'

// Mock Embla
vi.mock('embla-carousel-react', () => {
  return {
    default: () => [
      (node: HTMLElement) => {},
      {
        canScrollPrev: () => true,
        canScrollNext: () => true,
        scrollPrev: vi.fn(),
        scrollNext: vi.fn(),
        on: vi.fn(),
        off: vi.fn(),
      },
    ],
  }
})

describe('Carousel Component', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Item 1</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('renders carousel items', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide 1</CarouselItem>
          <CarouselItem>Slide 2</CarouselItem>
        </CarouselContent>
      </Carousel>
    )

    expect(screen.getByText('Slide 1')).toBeInTheDocument()
    expect(screen.getByText('Slide 2')).toBeInTheDocument()
  })

  it('renders navigation buttons', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    )

    expect(screen.getByText('Previous slide')).toBeInTheDocument()
    expect(screen.getByText('Next slide')).toBeInTheDocument()
  })
})
