import { IMaskInput } from 'react-imask'
import { Input } from '@/components/Inputs'
import { forwardRef } from 'react'
import { InputBaseProps } from '@mantine/core'

// ----------------------------------------------------------------------

type MaskedInputProps = InputBaseProps &
  Omit<React.ComponentPropsWithoutRef<typeof IMaskInput>, keyof InputBaseProps>

// ----------------------------------------------------------------------

export const MaskedInput = forwardRef<HTMLInputElement, MaskedInputProps>((props, ref) => {
  return (
    <Input
      ref={ref}
      component={IMaskInput}
      {...props}
    />
  )
})
