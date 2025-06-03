import type { Meta, StoryObj } from '@storybook/react'

import { KvellUiProvider } from '@/components/KvellUiProvider'

import { theme } from '@/components/theme'

import { CardLogoByPan as CardLogoByPanComponent } from '@/components/CardLogoByPan/CardLogoByPan'

// ----------------------------------------------------------------------

const meta = {
  title: 'Components/CardLogoByPan',

  component: CardLogoByPanComponent,
  decorators: (Story) => (
    <KvellUiProvider theme={theme}>
      <Story />
    </KvellUiProvider>
  ),
} satisfies Meta<typeof CardLogoByPanComponent>

type Story = StoryObj<typeof meta>

// ----------------------------------------------------------------------

export const CardLogoByPan: Story = {
  args: {
    value: '4111',
  },
}

// ----------------------------------------------------------------------

export default meta
