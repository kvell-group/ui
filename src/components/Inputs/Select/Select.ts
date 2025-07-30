import { Select as MantineSelect } from '@mantine/core'
import classNames from '../Input/Input.module.css'

// ----------------------------------------------------------------------

export const Select = MantineSelect.withProps({
  classNames,
  inputWrapperOrder: ['label', 'input', 'error', 'description'],
})
