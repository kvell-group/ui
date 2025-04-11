import type { Meta, StoryObj } from '@storybook/react'

import { MantineProvider } from '@/components/MainProvider'

import '@mantine/core/styles.css'
import { theme } from '@/components/theme'
import { Text } from '@/components/Text/Text'
import { Input } from '@/components/Input/Input'

// ----------------------------------------------------------------------

const meta = {
  title: 'Components/Input',
  component: Input,
  decorators: (Story) => (
    <MantineProvider theme={theme}>
      <Story />
    </MantineProvider>
  ),
} satisfies Meta<typeof Text>

type Story = StoryObj<typeof meta>

// ----------------------------------------------------------------------

export const ComponentInput: Story = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  args: { placeholder: 'IVAN IVANOV', style: { maxWidth: '465px' } } as any,
}

// ----------------------------------------------------------------------

export default meta
