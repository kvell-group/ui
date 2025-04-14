import CardSVG from '@/assets/card.svg'
import { MaskedInput } from '@/components/Inputs/MaskedInput'
import { useCardLogo } from '@/components/Inputs/CardInput/useCardLogo'
import type { InputProps } from '@/components/Inputs/types'

// ----------------------------------------------------------------------

export const CardInput = (props: InputProps) => {
  const CardLogo = useCardLogo(props.value)

  return (
    <MaskedInput
      {...props}
      mask='0000 0000 0000 0000'
      rightSection={CardLogo && <CardLogo />}
      leftSection={<CardSVG />}
      placeholder='____ ____ ____ ____'
    />
  )
}
