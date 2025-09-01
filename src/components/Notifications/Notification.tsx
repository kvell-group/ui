import { Notification as MantineNotification } from '@mantine/core'
import { RiErrorWarningFill } from '@remixicon/react'
import classNames from './Notifications.module.css'

export const Notification = MantineNotification.extend({
  classNames,
  defaultProps: {
    icon: <RiErrorWarningFill size={20} />,
  },
})
