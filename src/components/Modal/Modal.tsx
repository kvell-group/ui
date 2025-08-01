import { Modal as ModalBase } from '@mantine/core'
import '@mantine/core/styles/Modal.layer.css'
import classNames from './Modal.module.css'

// ----------------------------------------------------------------------

export const Modal = ModalBase.withProps({
  classNames,
  transitionProps: { transition: 'fade-up' },
})
