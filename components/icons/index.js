import { forwardRef } from 'react'
import IconArrowLeft from './arrow-left'
import IconArrowRight from './arrow-right'
import IconMenu from './menu'
import IconClose from './close'

const Icon = forwardRef((props, ref) => {
  switch (props.name) {
    case 'arrow-left':
      return <IconArrowLeft ref={ref} {...props} />
    case 'arrow-right':
      return <IconArrowRight ref={ref} {...props} />
    case 'menu':
      return <IconMenu ref={ref} {...props} />
    case 'close':
      return <IconClose ref={ref} />
    default:
      return null
  }
})

export default Icon
