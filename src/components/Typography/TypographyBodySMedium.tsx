import { Text } from '@mantine/core'

import classesNames from '@/components/Typography/TypographyBodySMedium.module.css'
import { TypographyProps } from '@/components/Typography/types'

// ----------------------------------------------------------------------

export const TypographyBodySMedium = (props: TypographyProps) => (
  <Text
    {...props}
    classNames={classesNames}
  />
)
