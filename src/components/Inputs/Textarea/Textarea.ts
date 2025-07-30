import { Textarea as MantineTextarea } from '@mantine/core'
import classNames from '../Input/Input.module.css'

// ----------------------------------------------------------------------

export const Textarea = MantineTextarea.withProps({
  classNames,
  inputWrapperOrder: ['label', 'input', 'error', 'description'],
})
