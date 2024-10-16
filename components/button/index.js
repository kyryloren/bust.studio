'use client'

import Icon from 'components/icons'
import { Button, ButtonRow, IconWrapper } from './styles'
import { breakpoints, NormalText } from 'styles'
import { useGSAP } from '@gsap/react'
import { useEffect, useRef, useState } from 'react'
import { useIsTouchDevice } from 'hooks'
import { useWindowSize } from 'react-use'
import gsap from 'gsap'

const CustomButton = ({ href, children }) => {
  const container = useRef()
  const innerIconRight = useRef()
  const outerIconRight = useRef()
  const innerIconLeft = useRef()
  const outerIconLeft = useRef()
  const { contextSafe } = useGSAP({ scope: container })
  const [originalStyles, setOriginalStyles] = useState({})
  const touchDevice = useIsTouchDevice()
  const { width } = useWindowSize()
  const isSmallScreen = width < breakpoints.tablet

  useEffect(() => {
    if (outerIconRight.current) {
      const { width, height, padding } = window.getComputedStyle(
        outerIconRight.current,
      )
      setOriginalStyles({ width, height, padding })
    }
  }, [])

  useEffect(() => {
    // Update button styles when screen width changes
    const buttons = [outerIconLeft.current, outerIconRight.current]
    buttons.forEach((button) => {
      if (button) {
        const { width, height, padding } = window.getComputedStyle(button)
        button.style.width = width
        button.style.height = height
        button.style.padding = padding
      }
    })
  }, [width])

  const onHoverNav = contextSafe(() => {
    if (touchDevice || isSmallScreen) return
    const tl = gsap.timeline()

    tl.set(innerIconLeft.current, { xPercent: -100 })
      .to(
        innerIconRight.current,
        { xPercent: -100, ease: 'back.out', duration: 0.4 },
        0,
      )
      .to(
        outerIconRight.current,
        {
          width: 0,
          height: 0,
          padding: 0,
          duration: 0.4,
          ease: 'power3.out',
        },
        0,
      )
      .to(
        outerIconLeft.current,
        { ...originalStyles, duration: 0.4, ease: 'power3.out' },
        0,
      )
      .to(
        innerIconLeft.current,
        { xPercent: 0, ease: 'back.out', duration: 0.4 },
        0.1,
      )
  })

  const onLeaveNav = contextSafe(() => {
    if (touchDevice || isSmallScreen) return
    const tl = gsap.timeline()

    tl.to(
      innerIconRight.current,
      { xPercent: 0, ease: 'back.out', duration: 0.6 },
      0,
    )
      .to(
        outerIconRight.current,
        { ...originalStyles, duration: 0.4, ease: 'power3.out' },
        0,
      )
      .to(
        outerIconLeft.current,
        {
          width: 0,
          height: 0,
          padding: 0,
          duration: 0.4,
          ease: 'power3.out',
        },
        0.1,
      )
      .to(
        innerIconLeft.current,
        { xPercent: -100, ease: 'back.out', duration: 1 },
        0,
      )
  })

  return (
    <ButtonRow
      href={href}
      onMouseEnter={() => onHoverNav()}
      onMouseLeave={() => onLeaveNav()}
    >
      <Button outer icon ref={outerIconLeft}>
        <IconWrapper>
          <Icon ref={innerIconLeft} name={'arrow-right'} />
        </IconWrapper>
      </Button>
      <Button>
        <span>
          <NormalText>{children}</NormalText>
        </span>
      </Button>
      <Button icon ref={outerIconRight}>
        <IconWrapper>
          <Icon ref={innerIconRight} name={'arrow-right'} />
        </IconWrapper>
      </Button>
    </ButtonRow>
  )
}

export default CustomButton
