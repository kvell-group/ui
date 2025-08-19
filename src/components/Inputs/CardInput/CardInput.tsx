import { MaskedInput } from '../MaskedInput'
import type { MaskedInputProps } from '../@types/types'
import { forwardRef } from 'react'
import { CARD_NUMBER_MASK } from '../../../constants/masks'
import { IMask } from 'react-imask'
import { RiBankCardLine as CardSVG } from '@remixicon/react'
import { CardLogoByPan } from '../../CardLogoByPan'

// ----------------------------------------------------------------------

const mask = IMask.createMask({ mask: CARD_NUMBER_MASK })

type CardInputProps = Omit<MaskedInputProps, 'value'> & { value?: string }

// ----------------------------------------------------------------------

export const CardInput = forwardRef<HTMLInputElement, CardInputProps>((props, ref) => {
  return (
    <MaskedInput
      ref={ref}
      inputMode='numeric'
      autoComplete='cc-number'
      {...props}
      mask={mask}
      rightSection={<CardLogoByPan value={props?.value || ''} />}
      leftSection={<CardSVG size={20} />}
      placeholder='____ ____ ____ ____'
    />
  )
})
