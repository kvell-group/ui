import { Select as MantineSelect } from '@mantine/core'
import classNames from '../Input/Input.module.css'
import textClassNames from '../../../styles/typography.module.css'
import clsx from 'clsx'
import { CAPTION_L_REGULAR_FONT_VARIANT } from '../../../constants/font-variants'

// ----------------------------------------------------------------------

const { input, error, ...restClassNames } = classNames

const captionLRegular = textClassNames[CAPTION_L_REGULAR_FONT_VARIANT]

const inputClassNames = clsx(input, captionLRegular)
const errorClassNames = clsx(error, captionLRegular)

// ----------------------------------------------------------------------

export const Select = MantineSelect.withProps({
  classNames: { ...restClassNames, input: inputClassNames, error: errorClassNames },
  inputWrapperOrder: ['label', 'input', 'error', 'description'],
})
