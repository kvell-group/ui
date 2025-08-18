import type { Meta, StoryObj } from '@storybook/react'

import { KvellUiProvider } from '@/components/KvellUiProvider'

import { theme } from '@/theme'
import { PinInput as PinInputComponent } from '@/components/Inputs/PinInput'

// ----------------------------------------------------------------------

const meta = {
  title: 'Components/Inputs/PinInput',
  component: PinInputComponent,
  decorators: (Story) => (
    <KvellUiProvider theme={theme}>
      <div style={{ maxWidth: '465px' }}>
        <Story />
      </div>
    </KvellUiProvider>
  ),
} satisfies Meta<typeof PinInputComponent>

type Story = StoryObj<typeof PinInputComponent>

// ----------------------------------------------------------------------

export const PinInput: Story = {
  args: {
    placeholder: '',
  },
}

export const PinInputError: Story = {
  args: {
    error: 'Ошибка OTP кода',
  },
}

// ----------------------------------------------------------------------

export default meta
