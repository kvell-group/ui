import { MantineProvider as MantineProviderCore } from '@mantine/core'
import type { MantineProviderProps as MantineProviderCoreProps } from '@mantine/core'

// ----------------------------------------------------------------------

type MantineProviderProps = MantineProviderCoreProps

export function MantineProvider({ children, theme }: MantineProviderProps) {
  return <MantineProviderCore theme={theme}>{children}</MantineProviderCore>
}
