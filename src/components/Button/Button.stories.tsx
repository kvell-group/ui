import type { Meta, StoryObj } from '@storybook/react'

import { MantineProvider } from '@/components/MainProvider'
import LeadSVG from '@/assets/lead-icon.svg'
import ArrowLeftSVG from '@/assets/arrow-left.svg'

import '@mantine/core/styles.css'
import { theme } from '@/components/theme'
import { Button } from '@/components/Button'
import { TypographyBodySMedium } from '@/components/Typography/TypographyBodySMedium'

// ----------------------------------------------------------------------

const meta = {
  title: 'Components/Button',
  argTypes: { variant: ['primary', 'secondary', 'tertiary'] },
  component: Button,
  decorators: (Story) => (
    <MantineProvider theme={theme}>
      <Story />
    </MantineProvider>
  ),
} satisfies Meta<typeof Button>

type Story = StoryObj<typeof meta>

// ----------------------------------------------------------------------

export const ComponentButton: Story = {
  args: {
    children: 'Текст кнопки',
    variant: 'tertiary',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
  },
}

export const PrimaryButton: Story = {
  args: {
    variant: 'primary',
    leftSection: <LeadSVG />,
    fullWidth: true,
    style: { maxWidth: '465px' },
    children: <TypographyBodySMedium>Оплатить 7 605,30 RUB</TypographyBodySMedium>,
  },
}

export const SecondaryButton: Story = {
  args: {
    variant: 'secondary',
    fullWidth: true,
    leftSection: <ArrowLeftSVG />,
    style: { maxWidth: '255px' },
    children: 'Вернуться на сайт продавца',
  },
}

export const TertiaryButton: Story = {
  args: {
    variant: 'tertiary',
    fullWidth: true,
    leftSection: <ArrowLeftSVG />,
    style: { maxWidth: '255px' },
    children: 'Сохранённые карты',
  },
}

// ----------------------------------------------------------------------

export default meta
