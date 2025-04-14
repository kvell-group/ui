import { MaskedInput } from '@/components/Inputs/MaskedInput'
import passwordClassNames from '@/components/Inputs/CvvInput/CvvInput.module.css'
import baseInputClassNames from '@/components/Inputs/Input.module.css'
import clsx from 'clsx'
import type { MaskedInputProps } from '@/components/Inputs/types'
import { forwardRef } from 'react'
import { CARD_CVV_MASK } from '@/constants/masks'

// ----------------------------------------------------------------------

const { input, ...restClassNames } = baseInputClassNames

const classNames = clsx(input, passwordClassNames.input)

// ----------------------------------------------------------------------

export const CvvInput = forwardRef<HTMLInputElement, MaskedInputProps>((props, ref) => (
  <MaskedInput
    ref={ref}
    {...props}
    mask={CARD_CVV_MASK}
    classNames={{ ...restClassNames, input: classNames }}
  />
))
