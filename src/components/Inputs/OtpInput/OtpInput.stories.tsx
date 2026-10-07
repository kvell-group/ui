import type { Meta, StoryObj } from '@storybook/react'

import { KvellUiProvider } from '@/components/KvellUiProvider'

import { theme } from '@/theme'
import { OtpInput as OtpInputComponent } from '@/components/Inputs/OtpInput'

const meta = {
  title: 'Components/Inputs/OtpInput',
  component: OtpInputComponent,
  decorators: (Story) => (
    <KvellUiProvider theme={theme}>
      <div style={{ maxWidth: '465px' }}>
        <Story />
      </div>
    </KvellUiProvider>
  ),
} satisfies Meta<typeof OtpInputComponent>

type Story = StoryObj<typeof OtpInputComponent>

export const OtpInput: Story = {}

export const OtpInputError: Story = {
  args: {
    error: 'Неверный код',
  },
}

export const OtpInputDisabled: Story = {
  args: {
    disabled: true,
  },
}

export const OtpInputWithoutSeparator: Story = {
  args: {
    separatorIndex: 0,
  },
}

export const OtpInputFourDigits: Story = {
  args: {
    length: 4,
  },
}

export default meta
