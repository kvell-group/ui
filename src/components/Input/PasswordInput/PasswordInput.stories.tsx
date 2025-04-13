import type { Meta, StoryObj } from '@storybook/react'

import { MantineProvider } from '@/components/MainProvider'

import '@mantine/core/styles.css'
import { theme } from '@/components/theme'
import { PasswordInput as PasswordInputComponent } from '@/components/Input/PasswordInput/PasswordInput'

// ----------------------------------------------------------------------

const meta = {
  title: 'Components/Inputs/PasswordInput',
  component: PasswordInputComponent,
  decorators: (Story) => (
    <MantineProvider theme={theme}>
      <div style={{ maxWidth: '144px' }}>
        <Story />
      </div>
    </MantineProvider>
  ),
} satisfies Meta<typeof PasswordInputComponent>

type Story = StoryObj<typeof PasswordInputComponent>

// ----------------------------------------------------------------------

export const PasswordInput: Story = {
  args: {
    label: 'CVV/CVC',
  },
}

export const PasswordInputError: Story = {
  args: {
    label: 'CVV/CVC',
    error: 'Укажите код',
  },
}

// ----------------------------------------------------------------------

export default meta
