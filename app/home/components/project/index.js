'use client'

import { useRef } from 'react'
import { CustomButton, CustomImage } from 'components'
import { ImageOverlay, ImageWrapper, ProjectWrapper } from './styles'
import { Container, HugeText } from 'styles'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Project = () => {
  const sectionRef = useRef()
  const movementRef = useRef()

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: `top-=20% bottom`,
        end: 'bottom bottom',
        scrub: true,
      },
    })

    timeline.fromTo(
      movementRef.current,
      { yPercent: 40, scale: 0.8 },
      { yPercent: -10, scale: 1 },
    )
  })

  return (
    <ProjectWrapper ref={sectionRef}>
      <Container>
        <ImageWrapper ref={movementRef}>
          <ImageOverlay>
            <HugeText>SOROS</HugeText>
            <CustomButton href={'/projects/SOROS'}>
              Explore Project
            </CustomButton>
          </ImageOverlay>
          <CustomImage src={'/soros.webp'} alt={'SOROS'} />w
        </ImageWrapper>
      </Container>
    </ProjectWrapper>
  )
}

export default Project
