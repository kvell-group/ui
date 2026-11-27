import { forwardRef } from 'react'
import { DatePickerInput as MantineDatePickerInput } from '@mantine/dates'
import type { DatePickerInputProps } from '@mantine/dates'
import { RiArrowLeftSLine, RiArrowRightSLine } from '@remixicon/react'
import { mergeClassNames } from '../../../utils/merge-class-names'
import inputClassNames from '../Input/Input.module.css'
import datePickerClassNames from './DatePickerInput.module.css'

// ----------------------------------------------------------------------

const { dropdown, ...calendarClassNames } = datePickerClassNames

const classNames = {
  ...inputClassNames,
  ...calendarClassNames,
}

// ----------------------------------------------------------------------

const DatePickerInputBase = MantineDatePickerInput.withProps({
  classNames,
  inputWrapperOrder: ['label', 'input', 'error', 'description'],
  size: 'sm',
  // Figma Calendar header: arrow-left-s-line / arrow-right-s-line, 20px
  previousIcon: <RiArrowLeftSLine size={20} />,
  nextIcon: <RiArrowRightSLine size={20} />,
})

const DatePickerInputWithPopover = forwardRef<HTMLButtonElement, DatePickerInputProps>(
  ({ popoverProps, ...props }, ref) => (
    <DatePickerInputBase
      ref={ref}
      {...props}
      popoverProps={{
        ...popoverProps,
        classNames: mergeClassNames({ dropdown }, popoverProps?.classNames),
      }}
    />
  )
)

export const DatePickerInput = Object.assign(DatePickerInputWithPopover, {
  extend: MantineDatePickerInput.extend,
}) as unknown as typeof MantineDatePickerInput
