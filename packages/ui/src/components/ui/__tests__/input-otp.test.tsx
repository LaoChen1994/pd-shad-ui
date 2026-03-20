import * as React from "react";
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '../input-otp'

describe('InputOTP Component', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(
      <InputOTP maxLength={6} aria-label="One-time password">
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
        </InputOTPGroup>
      </InputOTP>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('renders correctly', () => {
    const { container } = render(
      <InputOTP maxLength={4}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
      </InputOTP>
    )
    // There should be 4 slots
    const slots = container.querySelectorAll('.pd-relative.pd-flex')
    expect(slots.length).toBe(4)
  })
})
