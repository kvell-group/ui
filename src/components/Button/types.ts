import { ButtonVariants } from './constants'
import type { ButtonVariant } from '@mantine/core'

// ----------------------------------------------------------------------

type ButtonVariantsTypes = typeof ButtonVariants

export type ExtendedButtonVariant = ButtonVariant | ButtonVariantsTypes[number]
