import { IMaskInput } from 'react-imask'
import { Input } from '@/components/Inputs'
import { InputProps } from '@/components/Inputs/types'

// ----------------------------------------------------------------------

export const MaskedInput = (props: InputProps) => {
  return (
    <Input
      component={IMaskInput}
      {...props}
    />
  )
}
