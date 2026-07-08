import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { KvellUiProvider } from '@/components/KvellUiProvider'
import { Text } from '@/components/Text'

import { theme } from '@/theme'
import { AutocompleteSelect as AutocompleteSelectComponent } from '@/components/Inputs/AutocompleteSelect'

const data = ['React', 'Angular', 'Vue', 'Svelte', 'Solid', 'Ember']

const options: { value: string; label: string }[] = [
  { value: 'react', label: 'React' },
  { value: 'angular', label: 'Angular' },
  { value: 'vue', label: 'Vue' },
  { value: 'svelte', label: 'Svelte' },
]

const AutocompleteSelectWithLabelValueWrapper = () => {
  const [label, setLabel] = useState('')
  const [value, setValue] = useState<string | null>(null)

  const handleChange = (nextLabel: string) => {
    setLabel(nextLabel)
    setValue(options.find((option) => option.label === nextLabel)?.value ?? null)
  }

  return (
    <div style={{ maxWidth: '465px' }}>
      <AutocompleteSelectComponent
        label='Фреймворк'
        placeholder='Выберите или введите значение'
        data={options.map((option) => option.label)}
        value={label}
        onChange={handleChange}
      />
      <Text
        variant='caption-l-regular'
        mt='sm'
        display='block'
      >
        Выбранное value: {value ?? '—'}
      </Text>
    </div>
  )
}

// ----------------------------------------------------------------------

const meta = {
  title: 'Components/Inputs/AutocompleteSelect',
  component: AutocompleteSelectComponent,
  decorators: (Story) => (
    <KvellUiProvider theme={theme}>
      <div style={{ maxWidth: '465px' }}>
        <Story />
      </div>
    </KvellUiProvider>
  ),
} satisfies Meta<typeof AutocompleteSelectComponent>

type Story = StoryObj<typeof AutocompleteSelectComponent>

// ----------------------------------------------------------------------

export const AutocompleteSelect: Story = {
  args: {
    placeholder: 'Выберите или введите значение',
    label: 'Фреймворк',
    data,
  },
}

export const AutocompleteSelectError: Story = {
  args: {
    placeholder: 'Выберите или введите значение',
    label: 'Фреймворк',
    data,
    error: 'Значение не найдено в списке',
  },
}

export const AutocompleteSelectWithLabelValue: Story = {
  render: () => <AutocompleteSelectWithLabelValueWrapper />,
}

// ----------------------------------------------------------------------

export default meta
