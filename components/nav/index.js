'use client'

import { useRef, useEffect, useState } from 'react'
import Icon from 'components/icons'
import {
  Button,
  IconWrapper,
  MobileNavRow,
  NavLinkWrapper,
  NavRow,
  NormalLink,
} from './styles'
import { breakpoints, NormalText } from 'styles'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useIsTouchDevice } from 'hooks'
import { useWindowSize } from 'react-use'
import Menu from './menu'

const links = [
  { text: 'Work', href: '/' },
  { text: 'Studio', href: '/' },
  { text: 'Services', href: '/' },
  { text: 'Contact', href: '/' },
]

const Nav = () => {
  const container = useRef()
  const innerMenuText = useRef()
  const innerIconRight = useRef()
  const outerIconRight = useRef()
  const innerIconLeft = useRef()
  const outerIconLeft = useRef()
  const navLinkList = useRef()
  const navLink = useRef([])
  const { contextSafe } = useGSAP({ scope: container })
  const [originalStyles, setOriginalStyles] = useState({})
  const touchDevice = useIsTouchDevice()
  const { width } = useWindowSize()
  const [menuOpen, setMenuOpen] = useState(false)
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

  const onNavLinkHover = contextSafe((index) => {
    if (touchDevice || isSmallScreen) return
    navLink.current.forEach((link, i) => {
      gsap.to(link, { opacity: i === index ? 1 : 0.2, duration: 0.3 })
    })
  })

  const onNavLinkHoverOut = contextSafe(() => {
    if (touchDevice || isSmallScreen) return
    gsap.to(navLink.current, { opacity: 1, duration: 0.3 })
  })

  const onHoverNav = contextSafe(() => {
    if (touchDevice || isSmallScreen) return
    const tl = gsap.timeline()

    tl.set(innerIconLeft.current, { xPercent: -100 })
      .set(navLink.current, { yPercent: -100 })
      .to(
        innerMenuText.current,
        { yPercent: 100, width: 0, ease: 'back.out', duration: 0.4 },
        0.2,
      )
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
      .to(
        navLinkList.current,
        {
          width: 'auto',
          position: 'relative',
          duration: 0.4,
          ease: 'power3.inOut',
        },
        0,
      )
      .to(
        navLink.current,
        { yPercent: 0, duration: 0.4, stagger: 0.05, ease: 'back.out' },
        0.3,
      )
  })

  const onLeaveNav = contextSafe(() => {
    const tl = gsap.timeline()

    tl.to(
      innerMenuText.current,
      { yPercent: 0, width: '100%', ease: 'back.out', duration: 0.4 },
      0.3,
    )
      .to(
        innerIconRight.current,
        { xPercent: 0, ease: 'back.out', duration: 0.6 },
        0.2,
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
        0.3,
      )
      .to(
        innerIconLeft.current,
        { xPercent: -100, ease: 'back.out', duration: 1 },
        0,
      )
      .to(
        navLinkList.current,
        { width: 0, duration: 0.4, ease: 'power3.inOut' },
        0.1,
      )
      .to(
        navLink.current,
        { yPercent: -100, duration: 0.4, stagger: 0.05, ease: 'back.out' },
        0,
      )
  })

  return (
    <>
      <MobileNavRow
        touchDevice={touchDevice}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <Button menuOpen={menuOpen}>
          <NormalText>Menu</NormalText>
        </Button>
        <Button menuOpen={menuOpen} icon ref={outerIconRight}>
          <IconWrapper>
            <Icon name="menu" />
          </IconWrapper>
        </Button>
      </MobileNavRow>

      <NavRow
        touchDevice={touchDevice}
        ref={container}
        onMouseEnter={() => onHoverNav()}
        onMouseLeave={() => onLeaveNav()}
      >
        <Button outer icon ref={outerIconLeft}>
          <IconWrapper>
            <Icon ref={innerIconLeft} name={'arrow-right'} />
          </IconWrapper>
        </Button>
        <Button>
          <NavLinkWrapper ref={navLinkList}>
            {links.map((item, index) => (
              <span key={index}>
                <div ref={(el) => (navLink.current[index] = el)}>
                  <NormalLink
                    onMouseEnter={() => onNavLinkHover(index)}
                    onMouseLeave={onNavLinkHoverOut}
                    href={item.href}
                  >
                    {item.text}
                  </NormalLink>
                </div>
              </span>
            ))}
          </NavLinkWrapper>
          <span>
            <NormalText ref={innerMenuText}>Menu</NormalText>
          </span>
        </Button>
        <Button icon ref={outerIconRight}>
          <IconWrapper>
            <Icon ref={innerIconRight} name="arrow-left" />
          </IconWrapper>
        </Button>
      </NavRow>
      <Menu menuOpen={menuOpen} links={links} />
    </>
  )
}

export default Nav
