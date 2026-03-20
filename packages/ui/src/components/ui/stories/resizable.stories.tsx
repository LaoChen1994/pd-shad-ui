import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../resizable"

const meta: Meta<typeof ResizablePanelGroup> = {
  title: "Components/Resizable",
  component: ResizablePanelGroup,
}

export default meta
type Story = StoryObj<typeof ResizablePanelGroup>

export const Horizontal: Story = {
  render: () => (
    <ResizablePanelGroup
      direction="horizontal"
      className="pd-max-w-md pd-rounded-lg pd-border"
    >
      <ResizablePanel defaultSize={50}>
        <div className="pd-flex pd-h-[200px] pd-items-center pd-justify-center pd-p-6">
          <span className="pd-font-semibold">One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={25}>
            <div className="pd-flex pd-h-full pd-items-center pd-justify-center pd-p-6">
              <span className="pd-font-semibold">Two</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={75}>
            <div className="pd-flex pd-h-full pd-items-center pd-justify-center pd-p-6">
              <span className="pd-font-semibold">Three</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}

export const Vertical: Story = {
  render: () => (
    <ResizablePanelGroup
      direction="vertical"
      className="pd-min-h-[200px] pd-max-w-md pd-rounded-lg pd-border"
    >
      <ResizablePanel defaultSize={25}>
        <div className="pd-flex pd-h-full pd-items-center pd-justify-center pd-p-6">
          <span className="pd-font-semibold">Header</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={75}>
        <div className="pd-flex pd-h-full pd-items-center pd-justify-center pd-p-6">
          <span className="pd-font-semibold">Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}
