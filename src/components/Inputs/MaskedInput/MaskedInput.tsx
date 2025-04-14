import { IMaskInput } from 'react-imask'
import { Input } from '@/components/Inputs'
import { InputProps } from '@/components/Inputs/types'
import { forwardRef } from 'react'

// ----------------------------------------------------------------------

export const MaskedInput = forwardRef((props: InputProps, ref) => {
  return (
    <Input
      ref={ref}
      component={IMaskInput}
      {...props}
    />
  )
})
