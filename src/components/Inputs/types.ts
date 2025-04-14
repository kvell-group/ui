import { ElementProps, InputBaseProps } from '@mantine/core'
import { IMaskInput } from 'react-imask'

// ----------------------------------------------------------------------

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type InputProps = InputBaseProps & ElementProps<'input'> & { value?: string; mask?: any }

export type MaskedInputProps = InputBaseProps &
  Omit<React.ComponentPropsWithoutRef<typeof IMaskInput>, keyof InputBaseProps>
