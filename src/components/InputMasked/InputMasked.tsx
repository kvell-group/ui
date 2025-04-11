import { InputBase } from '@mantine/core'
import { IMaskInput } from 'react-imask'
import inputMaskedClassNames from '@/components/InputMasked/InputMasked.module.css'
import textClassNames from '@/components/Text/Text.module.css'
import clsx from 'clsx'

// ----------------------------------------------------------------------

const inputClassNames = clsx(inputMaskedClassNames.input, textClassNames['caption-l-regular'])

export const InputMasked = InputBase.withProps({
  component: IMaskInput,
  classNames: { input: inputClassNames, section: inputMaskedClassNames.section },
})
