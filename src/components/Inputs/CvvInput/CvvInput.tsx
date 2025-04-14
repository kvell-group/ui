import { MaskedInput } from '@/components/Inputs/MaskedInput'
import passwordClassNames from '@/components/Inputs/CvvInput/CvvInput.module.css'
import baseInputClassNames from '@/components/Inputs/Input.module.css'
import clsx from 'clsx'
import { InputProps } from '@/components/Inputs/types'

// ----------------------------------------------------------------------

const { input, ...restClassNames } = baseInputClassNames

const classNames = clsx(input, passwordClassNames.input)

// ----------------------------------------------------------------------

export const CvvInput = (props: InputProps) => (
  <MaskedInput
    {...props}
    mask='000'
    classNames={{ ...restClassNames, input: classNames }}
  />
)
