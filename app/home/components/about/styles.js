'use client'

import styled from 'styled-components'
import { borderImage, Container, SectionWrapper, Z_INDEX } from 'styles'

export const AboutWrapper = styled(SectionWrapper)`
  padding-top: 10vw;
  z-index: ${Z_INDEX.about};
`
export const CustomContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;

  .overflow {
    overflow: hidden;
    margin-top: -1vw;
  }
  .title-line {
    line-height: 1.1;
  }
  .number-line span {
    display: inline-block;
  }
`
export const ContentContainer = styled.div`
  margin-bottom: 30vh;
`
export const ButtonWrapper = styled.div`
  margin-top: 2vw;
`
export const StatContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vw;
  padding-top: 40vh;
`
export const SmallVideo = styled.video`
  position: absolute;
  width: 38vw;
  height: 30vw;
  top: -25%;
  right: 0;
  ${borderImage}
`
