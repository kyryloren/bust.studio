'use client'

import Link from 'next/link'
import styled from 'styled-components'
import { media, Normal, reversePxCutOff } from 'styles'

export const ButtonRow = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => `rgb(${theme.black})`};
  width: fit-content;
`
export const Button = styled.div`
  position: relative;
  background-color: ${({ theme }) => `rgb(${theme.brand})`};
  border-radius: 55px;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  padding: ${({ outer }) => (outer ? 0 : '1vw')};
  height: ${({ outer }) => (outer ? 0 : '3vw')};
  width: ${({ icon, outer }) => (outer ? 0 : icon ? '3vw' : 'auto')};
  ${media.desktopL`
    height: ${({ outer }) => (outer ? 0 : reversePxCutOff(3))};
    width: ${({ icon, outer }) => (outer ? 0 : icon ? reversePxCutOff(3) : 'auto')};
    padding: ${({ outer }) => (outer ? 0 : reversePxCutOff(1))};
  `}
  cursor: pointer;

  span {
    overflow: hidden;
  }

  svg {
    width: 100%;
  }
`
export const IconWrapper = styled.div`
  width: 1.75vw;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;

  ${media.desktopL`width: ${reversePxCutOff(1.75)};`}
`
export const NavLinkWrapper = styled.div`
  display: flex;
  width: 0;
  position: absolute;
  overflow: hidden;
  gap: 1.5vw;
  ${media.desktopL`gap: ${reversePxCutOff(1.5)};`}
`
export const NormalLink = styled(Link)`
  color: ${({ theme }) => `rgb(${theme.black})`};
  ${Normal}
  text-decoration: none;
`
