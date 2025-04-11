import { InputBase, InputBaseProps, ElementProps } from '@mantine/core'
import { IMaskInput } from 'react-imask'
import cardInputClassNames from '@/components/CardInput/CardInput.module.css'
import typographyClassNames from '@/components/Typography/TypographyCaptionLRegular.module.css'
import CardSVG from '@/assets/card.svg'
import classNames from 'classnames'
import { useCardLogo } from '@/components/CardInput/useCardLogo'

// ----------------------------------------------------------------------

const inputClassNames = classNames(cardInputClassNames.input, typographyClassNames.root)

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
