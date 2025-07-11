import { Card as MantineCard } from '@mantine/core'
import '@mantine/core/styles/Card.layer.css'
import classNames from './Card.module.css'

export const Card = MantineCard.withProps({ classNames })
