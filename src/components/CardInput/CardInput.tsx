import { InputBase, InputBaseProps, ElementProps } from '@mantine/core'
import { IMaskInput } from 'react-imask'
import cardInputClassNames from '@/components/CardInput/CardInput.module.css'
import textClassNames from '@/components/Text/Text.module.css'
import CardSVG from '@/assets/card.svg'

import { useCardLogo } from '@/components/CardInput/useCardLogo'
import clsx from 'clsx'

// ----------------------------------------------------------------------

const inputClassNames = clsx(cardInputClassNames.input, textClassNames['caption-l-regular'])

export const CardInputBase = InputBase.withProps({
  leftSection: <CardSVG />,
  component: IMaskInput,
  mask: '0000 0000 0000 0000',
  placeholder: '____ ____ ____ ____',
  classNames: { input: inputClassNames, section: cardInputClassNames.section },
})

// ----------------------------------------------------------------------

type CardInputProps = InputBaseProps & Omit<ElementProps<'input'>, 'value'> & { value: string }

export const CardInput = (props: CardInputProps) => {
  const CardLogo = useCardLogo(props.value)

  return (
    <CardInputBase
      {...props}
      rightSection={CardLogo && <CardLogo />}
    />
  )
}
