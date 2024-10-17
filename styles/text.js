'use client'

import styled, { css } from 'styled-components'
import media, { pxCutOff } from './media'

export const Normal = css`
  // 16 > 16
  font-size: ${pxCutOff(16)};
  font-weight: 500;
  line-height: 1;

  ${media.desktopL`font-size: 16px;`}
`
export const NormalText = styled.p`
  ${Normal}
  margin: 0;
`
export const Medium = css`
  // 24 > 20
  font-size: ${pxCutOff(24)};
  font-weight: 500;
  line-height: 1;

  ${media.desktopL`font-size: clamp(20px, 18.5915px + 0.3756vw, 24px);`}
`
export const MediumText = styled.p`
  ${Normal}
  margin: 0;
`
export const MediumLarge = css`
  // 36 > 48
  font-size: ${pxCutOff(48)};
  font-weight: 500;
  line-height: 1;

  ${media.desktopL`font-size: clamp(2.25rem, 1.9859rem + 1.1268vw, 3rem);`}
`
export const MediumLargeText = styled.h3`
  ${MediumLarge}
  margin: 0;
`
export const Large = css`
  // 56 > 64
  font-size: ${pxCutOff(64)};
  font-weight: 500;
  line-height: 1;

  ${media.desktopL`font-size: clamp(3.5rem, 3.3239rem + 0.7512vw, 4rem);`}
`
export const LargeText = styled.h2`
  ${Large}
  margin: 0;
`
export const Huge = css`
  // 56 > 64
  font-size: ${pxCutOff(128)};
  font-weight: 500;
  line-height: 1;

  ${media.desktopL`font-size: clamp(4rem, 2.5915rem + 6.0094vw, 8rem);`}
`
export const HugeText = styled.h2`
  ${Huge}
  margin: 0;
`
export const Display = css`
  // used only for the brand name

  position: relative;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: -2.05vw;
  font-size: 26.35vw;
  font-weight: 300;
  letter-spacing: -1.25vw;
  line-height: 0.77;
`
export const DisplayText = styled.h1`
  ${Display}
`
