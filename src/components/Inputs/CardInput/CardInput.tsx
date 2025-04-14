import CardSVG from '@/assets/card.svg'
import { MaskedInput } from '@/components/Inputs/MaskedInput'
import { useCardLogo } from '@/components/Inputs/CardInput/useCardLogo'
import type { MaskedInputProps } from '@/components/Inputs/types'
import { forwardRef } from 'react'
import { CARD_NUMBER_MASK } from '@/constants/masks'

// ----------------------------------------------------------------------

export const CardInput = forwardRef<HTMLInputElement, MaskedInputProps>((props, ref) => {
  const CardLogo = useCardLogo(props.value)

  return (
    <MaskedInput
      ref={ref}
      {...props}
      mask={CARD_NUMBER_MASK}
      rightSection={CardLogo && <CardLogo />}
      leftSection={<CardSVG />}
      placeholder='____ ____ ____ ____'
    />
  )
})
