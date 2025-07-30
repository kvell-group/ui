import { ACTION_ICON_VARIANT } from './constants'
import type { ActionIconVariant } from '@mantine/core'

// ----------------------------------------------------------------------

type ActionIconVariantsTypes = (typeof ACTION_ICON_VARIANT)[keyof typeof ACTION_ICON_VARIANT]

export type ExtendedActionIconVariant = ActionIconVariant | ActionIconVariantsTypes
