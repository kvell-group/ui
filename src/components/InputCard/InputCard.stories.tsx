import type { Meta, StoryObj } from '@storybook/react'

import { MantineProvider } from '@/components/MainProvider'

import '@mantine/core/styles.css'
import { theme } from '@/components/theme'

import { InputCard } from '@/components/InputCard'
import { ChangeEvent, useState } from 'react'

// ----------------------------------------------------------------------

const CardInputWrapper = () => {
  const [value, setValue] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)

  return (
    <InputCard
      value={value}
      onChange={handleChange}
      style={{ maxWidth: '465px' }}
    />
  )
}

const meta = {
  title: 'Components/CardInput',
  component: CardInputWrapper,
  decorators: (Story) => (
    <MantineProvider theme={theme}>
      <Story />
    </MantineProvider>
  ),
} satisfies Meta<typeof InputCard>

type Story = StoryObj<typeof meta>

// ----------------------------------------------------------------------

export const ComponentCardInput: Story = {
  args: { value: '' },
}

// ----------------------------------------------------------------------

export default meta
