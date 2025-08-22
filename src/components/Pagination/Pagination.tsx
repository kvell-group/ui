import { Pagination as MantinePagination } from '@mantine/core'
import { RiArrowLeftLine, RiArrowRightLine } from '@remixicon/react'
import classNames from './Pagination.module.css'

export const Pagination = MantinePagination.withProps({
  classNames,
  previousIcon: () => <RiArrowLeftLine size={16} />,
  nextIcon: () => <RiArrowRightLine size={16} />,
  dotsIcon: () => '...',
})
