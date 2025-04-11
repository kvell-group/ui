import { InputBase } from '@mantine/core'
import inputBaseClassNames from '@/components/Input/Input.module.css'
import textClassNames from '@/components/Text/Text.module.css'
import clsx from 'clsx'

// ----------------------------------------------------------------------

const inputClassNames = clsx(inputBaseClassNames.input, textClassNames['caption-l-regular'])

export const Input = InputBase.withProps({
  classNames: { input: inputClassNames, section: inputBaseClassNames.section },
})
