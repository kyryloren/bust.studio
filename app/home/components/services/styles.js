'use client'

import styled from 'styled-components'
import { GridWrapper, SectionWrapper, Z_INDEX } from 'styles'

export const ServicesWrapper = styled(SectionWrapper)`
  z-index: ${Z_INDEX.services};
`
export const TitleRow = styled(GridWrapper)`
  padding: 6vw 0 10vw;
`
export const LeftCol = styled.div`
  grid-column: 1 / 3;
`
export const CenterCol = styled.div`
  grid-column: 4 / 11;
`
export const RightCol = styled.div`
  grid-column: 11 / -1;
  text-align: right;
`
export const InfoRow = styled(GridWrapper)`
  ${({ first, theme }) =>
    first && `border-top: 1px dashed rgb(${theme.black});`}
  border-bottom: 1px dashed ${({ theme }) => `rgb(${theme.black})`};
  padding: 3vw 0;
  height: 80vh;
  background-color: ${({ theme }) => `rgb(${theme.body})`};
`
export const ContentCol = styled.div`
  grid-column: 4 / 8;
  display: flex;
  flex-direction: column;
  gap: 2vw;
`
