'use client'

import styled, { css } from 'styled-components'
import { GridWrapper, SectionWrapper, Z_INDEX } from 'styles'

export const ServicesWrapper = styled(SectionWrapper)`
  z-index: ${Z_INDEX.services};
`
export const TitleRow = styled(GridWrapper)`
  padding: 6vw 0 10vw;
`
export const LeftCol = styled.div`
  grid-column: 1 / 3;
  padding-top: 3vw;
`
export const CenterCol = styled.div`
  grid-column: 4 / 11;
`
export const RightCol = styled.div`
  grid-column: 11 / -1;
  text-align: right;
`
export const StickyWrapper = styled.div`
  --top: 0;
  position: sticky;
  top: var(--top);
`
export const InfoRow = styled(GridWrapper)`
  border-top: 1px dashed ${({ theme }) => `rgb(${theme.black})`};
  padding-bottom: 3vw;
  background-color: ${({ theme }) => `rgb(${theme.body})`};
  height: 365px;
`
export const ContentCol = styled.div`
  grid-column: 4 / 8;
  display: flex;
  flex-direction: column;

  h3 {
    padding: 3vw 0;
  }
  a {
    padding-top: 3vw;
  }
`
