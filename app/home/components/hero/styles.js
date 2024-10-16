'use client'

import styled from 'styled-components'
import { SectionWrapper, Z_INDEX } from 'styles'

export const HeroWrapper = styled(SectionWrapper)`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => `rgb(${theme.brand})`};
  padding-top: 2vw;
  z-index: ${Z_INDEX.hero};
`
export const BrandNameWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;

  h1 {
    color: ${({ theme }) => `rgb(${theme.black})`};
  }
`
