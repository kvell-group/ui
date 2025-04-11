import { InputBase, InputBaseProps, ElementProps } from '@mantine/core'
import { IMaskInput } from 'react-imask'
import inputCardClassNames from '@/components/InputCard/InputCard.module.css'
import textClassNames from '@/components/Text/Text.module.css'
import CardSVG from '@/assets/card.svg'

import { useCardLogo } from '@/components/InputCard/useCardLogo'
import clsx from 'clsx'

// ----------------------------------------------------------------------

const inputClassNames = clsx(inputCardClassNames.input, textClassNames['caption-l-regular'])

export const InputCardBase = InputBase.withProps({
  leftSection: <CardSVG />,
  component: IMaskInput,
  mask: '0000 0000 0000 0000',
  placeholder: '____ ____ ____ ____',
  classNames: { input: inputClassNames, section: inputCardClassNames.section },
})

// ----------------------------------------------------------------------

type InputCardProps = InputBaseProps & Omit<ElementProps<'input'>, 'value'> & { value: string }

export const InputCard = (props: InputCardProps) => {
  const CardLogo = useCardLogo(props.value)

  return (
    <InputCardBase
      {...props}
      rightSection={CardLogo && <CardLogo />}
    />
  )
}
