import styles from '@/components/Button/styles.module.css'
import { Button as MantineButton, ButtonProps } from '@mantine/core'
// ----------------------------------------------------------------------

export const Button = (props: ButtonProps) => (
  <MantineButton
    {...props}
    classNames={styles}
  />
)
