import clsx from 'clsx'
import type { MantineTheme } from '@mantine/core'

type ClassNamesRecord = Partial<Record<string, string>>

type ClassNamesInput<Payload> =
  | ClassNamesRecord
  | ((theme: MantineTheme, props: Payload, ctx: unknown) => ClassNamesRecord)
  | undefined

export function mergeClassNames<Payload>(base: ClassNamesRecord, custom: ClassNamesInput<Payload>) {
  return (theme: MantineTheme, props: Payload, ctx: unknown): ClassNamesRecord => {
    const resolved = typeof custom === 'function' ? custom(theme, props, ctx) : custom
    const result: ClassNamesRecord = { ...base }

    if (resolved) {
      for (const key of Object.keys(resolved)) {
        result[key] = clsx(base[key], resolved[key])
      }
    }

    return result
  }
}
