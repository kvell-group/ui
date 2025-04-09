import { Button as MantineButton, ButtonProps } from '@mantine/core'
import styles from '@/components/Button/styles.module.css'
// ----------------------------------------------------------------------

//default props
MantineButton.withProps({})

export const Button = (props: ButtonProps) => {
  return (
    <MantineButton
      {...props}
      classNames={styles}
    />
  )
}
