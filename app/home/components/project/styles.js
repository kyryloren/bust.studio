'use client'

import styled from 'styled-components'
import { borderImage, SectionWrapper, Z_INDEX } from 'styles'

export const ProjectWrapper = styled(SectionWrapper)`
  z-index: ${Z_INDEX.project};
  width: 100vw;
`
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 60vh;
  background-color: ${({ theme }) => `rgb(${theme.black}, 0.4)`};
  ${borderImage}
`
export const ImageOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: ${({ theme }) => `rgb(${theme.black}, 0.4)`};
  color: ${({ theme }) => `rgb(${theme.white})`};
  border-radius: inherit;
  padding: 2vw;
`
