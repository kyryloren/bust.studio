'use client'

import { useEffect, useRef } from 'react'
import { Container, LargeText, MediumLargeText, NormalText } from 'styles'
import {
  CenterCol,
  ContentCol,
  InfoRow,
  LeftCol,
  RightCol,
  ServicesWrapper,
  StickyWrapper,
  TitleRow,
} from './styles'
import { CustomButton } from 'components'

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
  const container = useRef()
  const titleRefs = useRef([])
  const wrapperRef = useRef([])

  useEffect(() => {
    wrapperRef.current.forEach((el, index, array) => {
      const totalElements = array.length
      const reverseIndex = totalElements - 1 - index // Reverse the index to start from the last element

      el.style.setProperty(
        '--top',
        index === 0
          ? '0px'
          : `${titleRefs.current[index]?.clientHeight * index}px`,
      )

      // Calculate marginBottom in reverse order
      el.style.marginBottom =
        reverseIndex === 0
          ? '0px'
          : `${titleRefs.current[reverseIndex]?.clientHeight * reverseIndex}px`
    })
  }, [])

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

        <div
          ref={container}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          {servicesList.map((service, index) => (
            <StickyWrapper ref={(el) => (wrapperRef.current[index] = el)}>
              <InfoRow>
                <LeftCol>
                  <NormalText>0{index + 1}</NormalText>
                </LeftCol>
                <ContentCol>
                  <MediumLargeText
                    ref={(el) => (titleRefs.current[index] = el)}
                  >
                    {service.name}
                  </MediumLargeText>
                  <NormalText>{service.description}</NormalText>
                  <CustomButton href={'/services'}>Learn more</CustomButton>
                </ContentCol>
              </InfoRow>
            </StickyWrapper>
          ))}
        </div>
      </Container>
    </ServicesWrapper>
  )
}

export default Services
