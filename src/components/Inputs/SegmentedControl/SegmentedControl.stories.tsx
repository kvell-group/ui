import type { Meta, StoryObj } from '@storybook/react'

import { KvellUiProvider } from '@/components/KvellUiProvider'

import { theme } from '@/theme'
import { SegmentedControl as SegmentedControlComponent } from '@/components/Inputs/SegmentedControl'

const data = [
  { value: 'card', label: 'На карту' },
  { value: 'sbp', label: 'Через СБП' },
]

const meta = {
  title: 'Components/Inputs/SegmentedControl',
  component: SegmentedControlComponent,
  decorators: (Story) => (
    <KvellUiProvider theme={theme}>
      <div style={{ maxWidth: '465px' }}>
        <Story />
      </div>
    </KvellUiProvider>
  ),
  args: {
    data,
    defaultValue: 'sbp',
    fullWidth: true,
  },
} satisfies Meta<typeof SegmentedControlComponent>

type Story = StoryObj<typeof SegmentedControlComponent>

export const SegmentedControl: Story = {}

export const SegmentedControlFirstSelected: Story = {
  args: { defaultValue: 'card' },
}

export const SegmentedControlSizeSm: Story = {
  args: { size: 'sm' },
}

export const SegmentedControlSizeLg: Story = {
  args: { size: 'lg' },
}

export const SegmentedControlDisabled: Story = {
  args: { disabled: true },
}

export const SegmentedControlThreeItems: Story = {
  args: {
    data: [...data, { value: 'wallet', label: 'Кошелёк' }],
  },
}

export const SegmentedControlOneItemDisabled: Story = {
  args: {
    data: [...data, { value: 'wallet', label: 'Кошелёк', disabled: true }],
  },
}

export default meta
