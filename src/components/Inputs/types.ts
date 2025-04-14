import { ElementProps, InputBaseProps } from '@mantine/core'

// ----------------------------------------------------------------------

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type InputProps = InputBaseProps & ElementProps<'input'> & { value?: string; mask?: any }
