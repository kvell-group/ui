import type { Meta, StoryObj } from '@storybook/react'

import { MantineProvider } from '@/components/MainProvider'

import '@mantine/core/styles.css'
import { theme } from '@/components/theme'

import { CardInput } from '@/components/CardInput'
import { ChangeEvent, useState } from 'react'

// ----------------------------------------------------------------------

const CardInputWrapper = () => {
  const [value, setValue] = useState('')

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)

  return (
    <CardInput
      value={value}
      onChange={changeHandler}
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
} satisfies Meta<typeof CardInput>

type Story = StoryObj<typeof meta>

// ----------------------------------------------------------------------

export const ComponentButton: Story = {
  args: { value: '' },
  argTypes: {},
}

// ----------------------------------------------------------------------

export default meta
