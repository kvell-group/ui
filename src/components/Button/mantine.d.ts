import { ButtonVariant } from '@mantine/core';

type ExtendedButtonVariant = ButtonVariant | 'primary' | 'secondary' | 'tertiary';

declare module '@mantine/core' {
  export interface ButtonProps {
    variant?: ExtendedButtonVariant;
  }
}