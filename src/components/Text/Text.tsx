import type { ElementProps, TextProps as TextBaseProps } from '@mantine/core'
import { Text as TextBase } from '@mantine/core'
import { forwardRef } from 'react'

import classesNames from '../../styles/typography.module.css'
import type { TextVariants } from './types'

// ----------------------------------------------------------------------

interface TextProps extends TextBaseProps, ElementProps<'p', keyof TextBaseProps> {
  variant?: TextVariants
}

export const Text = forwardRef<HTMLParagraphElement, TextProps>((props, ref) => (
  <TextBase
    ref={ref}
    {...props}
    classNames={{ root: classesNames[props.variant || 'text'] }}
  />
))
