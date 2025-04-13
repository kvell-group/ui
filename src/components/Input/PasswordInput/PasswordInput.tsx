import { PasswordInput as PasswordInputBase } from '@mantine/core'
import classNames from '@/components/Input/Input.module.css'
import sectionClassNames from '@/components/Input/PasswordInput/PasswordInput.module.css'
import textClassNames from '@/components/Text/Text.module.css'
import clsx from 'clsx'

// ----------------------------------------------------------------------

const { input, error, ...restClassNames } = classNames

const inputClassNames = clsx(input, textClassNames['caption-l-regular'])
const errorClassNames = clsx(error, textClassNames['caption-l-regular'])

// ----------------------------------------------------------------------

export const PasswordInput = PasswordInputBase.withProps({
  classNames: {
    ...restClassNames,
    input: inputClassNames,
    error: errorClassNames,
    section: sectionClassNames.section,
  },
})
