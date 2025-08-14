import { Textarea as MantineTextarea } from '@mantine/core'
import clsx from 'clsx'
import classNames from '../Input/Input.module.css'
import textareaClassNames from './Textarea.module.css'

// ----------------------------------------------------------------------

const inputClassName = clsx(textareaClassNames.input, classNames.input)

// ----------------------------------------------------------------------

export const Textarea = MantineTextarea.withProps({
  classNames: { ...classNames, input: inputClassName },
  inputWrapperOrder: ['label', 'input', 'error', 'description'],
})
