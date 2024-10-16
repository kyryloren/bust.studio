import { forwardRef } from 'react'

const IconMenu = forwardRef((props, ref) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 600 134"
    ref={ref}
  >
    <g fill="#000" clipPath="url(#a)">
      <path d="M133.333 67c0 36.82-29.847 66.667-66.6663 66.667C29.8477 133.667 0 103.82 0 67S29.8477.3334 66.6667.3334C103.486.3334 133.333 30.18 133.333 67ZM366.667 67c0 36.82-29.847 66.667-66.667 66.667S233.333 103.82 233.333 67 263.18.3334 300 .3334 366.667 30.18 366.667 67ZM600 67c0 36.82-29.847 66.667-66.667 66.667S466.667 103.82 466.667 67 496.513.3334 533.333.3334C570.153.3334 600 30.18 600 67Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h600v134H0z" />
      </clipPath>
    </defs>
  </svg>
))

export default IconMenu
