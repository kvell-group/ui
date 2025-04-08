import { Button as MantineButton, ButtonProps } from '@mantine/core'
import styles from '@/components/Button/styles.module.css';
// ----------------------------------------------------------------------

export const Button = (props: ButtonProps) => <MantineButton {...props} className={styles.button}/>
