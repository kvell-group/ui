import { PinInput as PinInputComponent } from '@mantine/core'
import type { PinInputProps as BasePinInputProps } from '@mantine/core'

import classes from './PinInput.module.css'
import textClasses from '../../../styles/typography.module.css'
import inputBaseClasses from '../@styles/input-base.module.css'
import { forwardRef } from 'react'
import clsx from 'clsx'

const inputClassName = clsx(
  classes.input,
  textClasses['body-m-regular'],
  inputBaseClasses['input-base']
)

type PinInputProps = Omit<BasePinInputProps, 'error'> & {
  error?: string
}

export const PinInput = forwardRef<HTMLInputElement, PinInputProps>((props, ref) => {
  const { error, size = 'lg', gap = 4, radius = 'xl', ...restProps } = props

  const isError = Boolean(error)

  return (
    <>
      <PinInputComponent
        ref={ref}
        {...restProps}
        radius={radius}
        gap={gap}
        size={size}
        error={isError}
        classNames={{ ...classes, input: inputClassName }}
      />
      {isError && <span className={inputBaseClasses['error-message']}>{error}</span>}
    </>
  )
})
