import { AlertVariants } from './constants'
import type { AlertProps as MantineAlertProps } from '@mantine/core'

// ----------------------------------------------------------------------

type AlertVariantsType = typeof AlertVariants

export type ExtendedAlertVariant = MantineAlertProps['variant'] | AlertVariantsType[number]
