import { TextInput } from '@mantine/core'
import '@mantine/core/styles/Input.layer.css'
import classNames from './Input.module.css'

// ----------------------------------------------------------------------

export const Input = TextInput.withProps({
  classNames,
  inputWrapperOrder: ['label', 'input', 'error', 'description'],
})
