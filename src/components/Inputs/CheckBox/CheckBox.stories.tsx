import type { Meta, StoryObj } from '@storybook/react'

import { MantineProvider } from '@/components/MainProvider'

import '@mantine/core/styles.css'
import { theme } from '@/components/theme'
import { Checkbox as CheckboxComponent } from '@/components/Inputs/CheckBox/CheckBox'

// ----------------------------------------------------------------------

const meta = {
  title: 'Components/Inputs/CheckBox',
  component: CheckboxComponent,
  decorators: (Story) => (
    <MantineProvider theme={theme}>
      <div style={{ maxWidth: '465px' }}>
        <Story />
      </div>
    </MantineProvider>
  ),
} satisfies Meta<typeof CheckboxComponent>

type Story = StoryObj<typeof CheckboxComponent>

// ----------------------------------------------------------------------

export const Checkbox: Story = {
  args: {
    placeholder: 'IVAN IVANOV',
    label: 'Соглашаюсь с условиями КИД (Ключевого информационного документа)',
  },
}

export const CheckboxChecked: Story = {
  args: {
    checked: true,
    disabled: true,
  },
}

// ----------------------------------------------------------------------

export default meta
