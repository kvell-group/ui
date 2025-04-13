import { IMaskInput } from 'react-imask'
import { Input } from '@/components/Input'
import { InputProps } from '@/components/Input/types'

// ----------------------------------------------------------------------

export const MaskedInput = (props: InputProps) => {
  return (
    <Input
      component={IMaskInput}
      {...props}
    />
  )
}
