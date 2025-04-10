import { Button } from '@/components/Button'
import SVG from '@/assets/lead-icon.svg'

export const ExperimentalButtonWithSvg = () => {
  return (
    <Button
      leftSection={<SVG />}
      variant='primary'
    >
      ExperimentalButtonWithSvg
    </Button>
  )
}
