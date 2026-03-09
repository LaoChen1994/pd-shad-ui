import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { axe } from 'vitest-axe'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '../resizable'

// Mock react-resizable-panels
vi.mock('react-resizable-panels', () => {
  return {
    PanelGroup: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    Panel: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    PanelResizeHandle: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  }
})

describe('Resizable Component', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(
      <div style={{ height: '200px', width: '400px' }}>
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={50}>Left</ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>Right</ResizablePanel>
        </ResizablePanelGroup>
      </div>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('renders panels and handle', () => {
    render(
      <div style={{ height: '200px', width: '400px' }}>
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={50}>Panel A</ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>Panel B</ResizablePanel>
        </ResizablePanelGroup>
      </div>
    )

    expect(screen.getByText('Panel A')).toBeInTheDocument()
    expect(screen.getByText('Panel B')).toBeInTheDocument()
  })
})
