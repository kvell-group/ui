import { createPolymorphicComponent, Button as MantineButton } from '@mantine/core'
import type { ButtonProps as BaseButtonProps } from '@mantine/core'
import '@mantine/core/styles/UnstyledButton.layer.css'
import '@mantine/core/styles/Button.layer.css'
import classNames from './Button.module.css'
import { forwardRef } from 'react'
import { ExtendedButtonVariant } from './types'

// ----------------------------------------------------------------------

type ButtonProps = BaseButtonProps & { variant?: ExtendedButtonVariant }

export const Button = createPolymorphicComponent<'button', ButtonProps>(
  forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const { size = 'md', ...resProps } = props
    return (
      <MantineButton
        ref={ref}
        size={size}
        {...resProps}
        classNames={classNames}
      />
    )
  })
)
