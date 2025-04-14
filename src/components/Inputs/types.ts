import { ElementProps, InputBaseProps } from '@mantine/core'

// ----------------------------------------------------------------------

export type InputProps = InputBaseProps & ElementProps<'input'> & { value?: string; mask?: string }
