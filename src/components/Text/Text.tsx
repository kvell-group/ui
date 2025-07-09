import type { TextProps as TextBaseProps } from '@mantine/core'
import { Text as TextBase } from '@mantine/core'
import { forwardRef, type ReactNode, type Ref } from 'react'

import classesNames from '../../styles/typography.module.css'
import type { TextVariants } from './types'

// ----------------------------------------------------------------------

type TextProps = Omit<TextBaseProps, 'variant'> & {
  children: ReactNode
  variant?: TextVariants
}

export const Text = forwardRef((props: TextProps, ref: Ref<HTMLParagraphElement>) => (
  <TextBase
    ref={ref}
    {...props}
    classNames={{ root: classesNames[props.variant || 'text'] }}
  />
))
