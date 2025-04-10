import { Button as MantineButton, ButtonProps } from '@mantine/core'
import '@mantine/core/styles/UnstyledButton.css'
import '@mantine/core/styles/Button.css'
import classesNames from '@/components/Button/Button.module.css'

// ----------------------------------------------------------------------

export const Button = (props: ButtonProps) => {
  return (
    <MantineButton
      {...props}
      classNames={classesNames}
    />
  )
}
