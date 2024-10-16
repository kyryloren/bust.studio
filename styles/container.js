'use client'

import { css, styled } from 'styled-components'
import media from './media'

export const ContainerPaddingLeft = css`
  padding-left: 2vw;
  ${media.tablet`padding-left: 1rem;`};
`
export const ContainerPaddingRight = css`
  padding-right: 2vw;
  ${media.tablet`padding-right: 1rem;`};
`

const Container = styled.div`
  width: 100%;
  height: ${({ _height }) => (_height ? _height : 'inherit')};
  margin-right: auto;
  margin-left: auto;
  ${ContainerPaddingLeft}
  ${ContainerPaddingRight}
`

export default Container
