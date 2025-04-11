import { Text } from '@mantine/core'

import classesNames from '@/components/Typography/TypographyCaptionLRegular.module.css'
import { TypographyProps } from '@/components/Typography/types'

// ----------------------------------------------------------------------

export const TypographyCaptionLMedium = (props: TypographyProps) => (
  <Text
    {...props}
    classNames={classesNames}
  />
)
