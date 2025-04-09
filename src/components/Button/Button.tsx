import { Button as MantineButton, ButtonProps } from '@mantine/core'
import '@mantine/core/styles/UnstyledButton.css'
import '@mantine/core/styles/Button.css'
import styles from '@/components/Button/styles.module.css'
// ----------------------------------------------------------------------

export const Button = (props: ButtonProps) => (
  <MantineButton
    {...props}
    classNames={styles}
  />
)
