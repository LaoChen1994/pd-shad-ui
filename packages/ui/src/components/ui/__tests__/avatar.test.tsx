import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import { Avatar, AvatarFallback, AvatarImage } from '../avatar'

describe('Avatar Component', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('renders fallback when image is loading or missing', () => {
    render(
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    )
    expect(screen.getByText('JD')).toBeInTheDocument()
  })
})
