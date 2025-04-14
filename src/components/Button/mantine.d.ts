import { ExtendedButtonVariant } from '@/components/Button/types'

// ----------------------------------------------------------------------

declare module '@mantine/core' {
  export interface ButtonProps {
    variant?: ExtendedButtonVariant
  }
}
