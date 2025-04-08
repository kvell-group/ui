import type { Meta, StoryObj } from '@storybook/react'

import { MantineProvider } from '@/components/MainProvider'

import '@mantine/core/styles.css'
import { theme } from '@/components/theme'
import { Button } from '@/components/Button'
import { ButtonProps } from '@mantine/core'

// ----------------------------------------------------------------------

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: (Story) => (
    <MantineProvider theme={theme}>
      <Story />
    </MantineProvider>
  ),
} satisfies Meta<typeof Button>

type Story = StoryObj<typeof meta>

export const ButtonLarge: Story = {
  args: {
    size: 'xl',
    children: 'Button',
  } as ButtonProps,
}

export const ButtonSmall: Story = {
  args: {
    size: 'sm',
    children: 'Button',
  } as ButtonProps,
}

// ----------------------------------------------------------------------

export default meta
