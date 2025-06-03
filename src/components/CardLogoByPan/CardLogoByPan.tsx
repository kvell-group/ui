import { getCardLogoByPan } from './utils'

// ----------------------------------------------------------------------

interface CardLogoByPanProps extends React.SVGProps<SVGSVGElement> {
  value: string
  customColor?: string
}

// ----------------------------------------------------------------------

export const CardLogoByPan = ({ value, ...restSvgProps }: CardLogoByPanProps) => {
  const Icon = getCardLogoByPan(value)

  return Icon && <Icon {...restSvgProps} />
}
