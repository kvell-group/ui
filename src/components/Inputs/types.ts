import type { ElementProps, InputBaseProps } from '@mantine/core'
import type { IMaskInputProps } from 'react-imask'

// ----------------------------------------------------------------------

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type InputProps = InputBaseProps & ElementProps<'input'> & { value?: string }

export type MaskedInputProps = IMaskInputProps<HTMLInputElement> & InputBaseProps
