'use client'

import { useRef, useState } from 'react'
import { Container, LargeText, NormalText } from 'styles'
import {
  CenterCol,
  ContentCol,
  InfoRow,
  LeftCol,
  RightCol,
  ServicesWrapper,
  TitleRow,
} from './styles'
import { CustomButton } from 'components'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const servicesList = [
  {
    name: 'Applications',
    description: `Every mobile app and web app involves stages of target audience research and prototype testing. The result? A product that’s perfectly suited to your users.`,
  },
  {
    name: 'Brand Strategy',
    description: `It's the core of your company's identity. It guides all business decisions, ensuring a consistent and impactful presence in the market.`,
  },
  {
    name: 'Websites',
    description: `In our team, developers work alongside designers. This is crucial in creating a fast and responsive website that would excite the audience.`,
  },
  {
    name: 'Visual Identity',
    description: `Visual identity is the unique visual language of your brand, creating memorable impressions and emotional connections with your audience.`,
  },
]

const Services = () => {
  return (
    <ServicesWrapper>
      <Container>
        <TitleRow>
          <LeftCol>
            <NormalText>Services</NormalText>
          </LeftCol>
          <CenterCol>
            <LargeText>
              High-end services for
              <br />a rapidly evolving world:
            </LargeText>
          </CenterCol>
          <RightCol>
            <NormalText>04 total</NormalText>
          </RightCol>
        </TitleRow>

        {servicesList.map((service, index) => (
          <InfoRow key={index} first={index === 0}>
            <LeftCol>
              <NormalText>0{index + 1}</NormalText>
            </LeftCol>
            <ContentCol>
              <LargeText>{service.name}</LargeText>
              <NormalText>{service.description}</NormalText>
              <CustomButton href={'/services'}>Learn more</CustomButton>
            </ContentCol>
          </InfoRow>
        ))}
      </Container>
    </ServicesWrapper>
  )
}

export default Services
