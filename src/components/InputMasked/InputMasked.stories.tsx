import type { Meta, StoryObj } from '@storybook/react'

import { MantineProvider } from '@/components/MainProvider'

import '@mantine/core/styles.css'
import { theme } from '@/components/theme'
import { InputMasked } from '@/components/InputMasked/InputMasked'
import CalendarSVG from '@/assets/calendar.svg'

// ----------------------------------------------------------------------

const meta = {
  title: 'Components/InputMasked',
  component: InputMasked,
  decorators: (Story) => (
    <MantineProvider theme={theme}>
      <Story />
    </MantineProvider>
  ),
} satisfies Meta<typeof InputMasked>

type Story = StoryObj<typeof meta>

// ----------------------------------------------------------------------

export const ComponentInputMasked: Story = {
  args: { mask: '00/00', placeholder: '01/25', style: { maxWidth: '465px' } },
}

export const InputMaskedExpiryDate: Story = {
  args: {
    fullWidth: true,
    leftSection: <CalendarSVG />,
    style: { maxWidth: '304px' },
    mask: '00/00',
    value: '1225',
  },
}

// ----------------------------------------------------------------------

export default meta
