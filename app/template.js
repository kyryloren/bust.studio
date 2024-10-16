'use client'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle, normalTheme } from 'styles'
import { LenisWrapper, Nav, Scrollbar } from 'components'
import { useIsTouchDevice } from 'hooks'

export default function Template({ children }) {
  const touchDevice = useIsTouchDevice()

  return (
    <ThemeProvider theme={normalTheme}>
      <GlobalStyle />
      <LenisWrapper>
        {touchDevice ? null : <Scrollbar />}
        <Nav />
        <main>{children}</main>
      </LenisWrapper>
    </ThemeProvider>
  )
}
