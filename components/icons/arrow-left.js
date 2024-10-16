import { forwardRef } from 'react'

const IconArrowLeft = forwardRef((props, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19 12H5m0 0 6-6m-6 6 6 6"
    />
  </svg>
))

export default IconArrowLeft
