import { PasswordInput as PasswordInputBase } from '@mantine/core'
import classNames from '../Input/Input.module.css'
import sectionClassNames from './PasswordInput.module.css'

// ----------------------------------------------------------------------

export const PasswordInput = PasswordInputBase.withProps({
  classNames: {
    ...classNames,
    section: sectionClassNames.section,
  },
  autoComplete: 'current-password',
  inputWrapperOrder: ['label', 'input', 'error', 'description'],
})
