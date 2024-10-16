import { forwardRef } from 'react'

const IconArrowRight = forwardRef((props, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5 12h14m0 0-6-6m6 6-6 6"
    />
  </svg>
))

export default IconArrowRight
