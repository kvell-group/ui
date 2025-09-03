import { Select as MantineSelect } from '@mantine/core'
import clsx from 'clsx'
import inputClassNames from '../Input/Input.module.css'
import selectClassNames from './Select.module.css'

// ----------------------------------------------------------------------

const classNames = {
  ...inputClassNames,
  root: clsx(selectClassNames.root, inputClassNames.root),
  section: clsx(selectClassNames.section, inputClassNames.section),
}

// ----------------------------------------------------------------------

export const Select = MantineSelect.withProps({
  classNames,
  inputWrapperOrder: ['label', 'input', 'error', 'description'],
  comboboxProps: { floatingStrategy: 'fixed' },
})
