import { TextProps as TextBaseProps } from '@mantine/core'
import { Text as TextBase } from '@mantine/core'
import { ReactNode } from 'react'

import classesNames from '@/components/Text/Text.module.css'

// ----------------------------------------------------------------------

type TextVariants =
  | TextBaseProps['variant']
  | 'body-s-medium'
  | 'caption-l-medium'
  | 'caption-l-regular'

export type TextProps = Omit<TextBaseProps, 'variant'> & {
  children: ReactNode
  variant: TextVariants
}

export const Text = (props: TextProps) => (
  <TextBase
    {...props}
    classNames={{ root: classesNames[props.variant || 'text'] }}
  />
)
