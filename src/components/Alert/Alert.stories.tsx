import type { Meta, StoryObj } from '@storybook/react'

import { KvellUiProvider } from '@/components/KvellUiProvider'

import { theme } from '@/theme'
import { Alert } from '@/components/Alert'
import {
  AlertVariants,
  DANGER_ALERT_VARIANT,
  WARNING_ALERT_VARIANT,
} from '@/components/Alert/constants'

// ----------------------------------------------------------------------

const meta = {
  title: 'Components/Alert',
  argTypes: { variant: AlertVariants },
  component: Alert,
  decorators: (Story) => (
    <KvellUiProvider theme={theme}>
      <Story />
    </KvellUiProvider>
  ),
} satisfies Meta<typeof Alert>

type Story = StoryObj<typeof meta>

// ----------------------------------------------------------------------

export const ComponentAlert: Story = {
  args: {
    variant: WARNING_ALERT_VARIANT,
    children: 'Проверьте данные карты перед оплатой',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: AlertVariants,
    },
  },
}

export const WarningAlert: Story = {
  args: {
    variant: WARNING_ALERT_VARIANT,
    children: 'Оплата будет доступна после подтверждения банком',
  },
}

export const CustomIconAlert: Story = {
  args: {
    icon: null,
    children: 'Алерт без иконки',
  },
}

export const WarningAlertWithoutIcon: Story = {
  args: {
    variant: WARNING_ALERT_VARIANT,
    icon: null,
    children: 'Алерт с вариантом warning, но без иконки (icon явно передан как null)',
  },
}

export const DangerAlert: Story = {
  args: {
    variant: DANGER_ALERT_VARIANT,
    children: 'Оплата отклонена банком',
  },
}

export const DefaultAlert: Story = {
  args: {
    children: 'Алерт без variant и без icon — прозрачный фон, без иконки',
  },
}

// ----------------------------------------------------------------------

export default meta
