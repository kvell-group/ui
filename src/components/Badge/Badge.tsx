import { Badge as MantineBadge } from '@mantine/core'
import '@mantine/core/styles/Badge.layer.css'
import classNames from './Badge.module.css'

export const Badge = MantineBadge.withProps({ classNames, bd: 0 })
