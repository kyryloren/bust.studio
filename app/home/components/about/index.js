'use client'

import { Container, HugeText, LargeText, MediumText } from 'styles'
import {
  AboutWrapper,
  ButtonWrapper,
  ContentContainer,
  CustomContainer,
  SmallVideo,
  StatContainer,
} from './styles'
import { CustomButton, Parallax } from 'components'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  useGSAP(() => {
    const videoTimelinePin = gsap.timeline({
      scrollTrigger: {
        trigger: '.video-container',
        start: `top-=25% bottom-=${document.querySelector('.video-container video').clientHeight + 20}`,
        end: 'bottom bottom',
        scrub: true,
        pin: true,
        pinSpacing: false,
      },
    })

    const videoAnimationTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.video-container',
        start: `top-=25% bottom-=${document.querySelector('.video-container video').clientHeight + 20}`,
        end: 'center bottom',
        scrub: true,
      },
    })

    videoAnimationTimeline.from(
      '.video-container video',
      {
        scale: 0.6,
        rotation: -25,
        xPercent: 100,
        yPercent: 100,
      },
      0,
    )

    const videoExitAnimationTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: gsap.utils.toArray('.stat-section')[1],
        start: `top-=40% top`,
        end: 'bottom+=200% top',
        scrub: true,
      },
    })

    videoExitAnimationTimeline.to('.video-container video', {
      scale: 0.6,
      rotation: 25,
      xPercent: -20,
      yPercent: -85,
    })
  })

  useGSAP(() => {
    const textSections = gsap.utils.toArray('.text-section')
    textSections.forEach((section) => {
      const textTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      })

      textTimeline
        .from(section.querySelectorAll('.title-line'), {
          yPercent: 100,
          stagger: 0.1,
          ease: 'power3.inOut',
          duration: 0.5,
        })
        .from(
          section.querySelector('.button-reveal'),
          {
            scale: 0,
            transformOrigin: 'left center',
            duration: 0.5,
          },
          '-=0.25',
        )
    })

    const statSections = gsap.utils.toArray('.stat-section')
    statSections.forEach((section) => {
      const statTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      })

      statTimeline
        .from(section.querySelectorAll('.number-line span'), {
          yPercent: 100,
          stagger: 0.1,
          ease: 'power3.inOut',
          duration: 0.5,
        })
        .from(
          section.querySelectorAll('.number-line-caption'),
          {
            yPercent: 100,
            stagger: 0.1,
            ease: 'power3.inOut',
            duration: 0.5,
          },
          '-=0.25',
        )
    })
  })

  return (
    <AboutWrapper>
      <CustomContainer>
        <ContentContainer>
          <div className="text-section">
            <Parallax speed={-4}>
              <div>
                <div className="overflow">
                  <LargeText className="title-line">
                    We create cutting-edge
                  </LargeText>
                </div>
                <div className="overflow">
                  <LargeText className="title-line">
                    digital user experiences
                  </LargeText>
                </div>
                <div className="overflow">
                  <LargeText className="title-line">and brands</LargeText>
                </div>
                <ButtonWrapper className="button-reveal">
                  <CustomButton href="/about">About</CustomButton>
                </ButtonWrapper>
              </div>
            </Parallax>
          </div>
          <div className="stat-section">
            <Parallax speed={-3}>
              <StatContainer>
                <div className="overflow">
                  <HugeText className="number-line">
                    <span>$</span>
                    <span>1</span>
                    <span>M</span>
                    <span>+</span>
                  </HugeText>
                </div>

                <div className="overflow">
                  <MediumText className="number-line-caption">
                    raised on online crypto projects
                  </MediumText>
                </div>
              </StatContainer>
            </Parallax>
          </div>
          <div className="stat-section">
            <Parallax speed={-4}>
              <StatContainer>
                <div className="overflow">
                  <HugeText className="number-line">
                    <span>5</span>
                    <span>0</span>
                    <span>0</span>
                    <span>k</span>
                    <span>+</span>
                  </HugeText>
                </div>

                <div className="overflow">
                  <MediumText className="number-line-caption">
                    organic follower growth
                  </MediumText>
                </div>
              </StatContainer>
            </Parallax>
          </div>
        </ContentContainer>

        <div className="video-container">
          <SmallVideo autoPlay loop muted>
            <source src="/4.mp4" type="video/mp4" />
          </SmallVideo>
        </div>
      </CustomContainer>
    </AboutWrapper>
  )
}

export default About
