import { MantineProvider as MantineProviderCore } from '@mantine/core'
import type { MantineProviderProps } from '@mantine/core'

import '@mantine/core/styles.layer.css'
import '@mantine/dates/styles.layer.css'
import './KvellUiProvider.css'

// ----------------------------------------------------------------------

export function KvellUiProvider({ children, theme, ...restProps }: MantineProviderProps) {
  return (
    <MantineProviderCore
      theme={theme}
      {...restProps}
    >
      {children}
    </MantineProviderCore>
  )
}
