import '@mantine/core/styles/Button.layer.css'
import styles from '@/components/Button/styles.module.css'

import { Button as MantineButton, ButtonProps } from '@mantine/core'
// ----------------------------------------------------------------------

export const Button = (props: ButtonProps) => (
  <MantineButton
    {...props}
    className={styles.button}
  />
)
