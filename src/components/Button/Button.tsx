import { Button as MantineButton } from '@mantine/core'
import type { ButtonProps } from '@mantine/core'
import '@mantine/core/styles/UnstyledButton.css'
import '@mantine/core/styles/Button.css'
import classesNames from '@/components/Button/Button.module.css'
import { forwardRef, Ref } from 'react'

// ----------------------------------------------------------------------

export const Button = forwardRef((props: ButtonProps, ref: Ref<HTMLButtonElement>) => {
  return (
    <MantineButton
      ref={ref}
      {...props}
      classNames={classesNames}
    />
  )
})
