import { DatePickerInput as MantineDatePickerInput } from '@mantine/dates'
import classNames from '../Input/Input.module.css'

// ----------------------------------------------------------------------

export const DatePickerInput = MantineDatePickerInput.withProps({
  classNames,
  inputWrapperOrder: ['label', 'input', 'error', 'description'],
  size: 'sm',
})
