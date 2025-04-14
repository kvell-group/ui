import type { TextProps as TextBaseProps } from '@mantine/core'
import { Text as TextBase } from '@mantine/core'
import { ReactNode } from 'react'

import classesNames from '@/styles/typography.module.css'
import type { TextVariants } from '@/components/Text/types'

// ----------------------------------------------------------------------

export type TextProps = Omit<TextBaseProps, 'variant'> & {
  children: ReactNode
  variant?: TextVariants
}

export const Text = (props: TextProps) => (
  <TextBase
    {...props}
    classNames={{ root: classesNames[props.variant || 'text'] }}
  />
)
