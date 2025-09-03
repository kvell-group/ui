import { CloseButton as MantineCloseButton } from '@mantine/core'
import { RiCloseFill } from '@remixicon/react'
import classNames from './CloseButton.module.css'

export const CloseButton = MantineCloseButton.extend({
  classNames,
  defaultProps: { icon: <RiCloseFill size={14} /> },
})
