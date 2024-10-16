import { Container, DisplayText, LargeText } from 'styles'
import { BrandNameWrapper, HeroWrapper } from './styles'

const Hero = () => {
  return (
    <HeroWrapper>
      <Container>
        <LargeText>
          A creative design & development
          <br />
          agency for web3 and crypto
        </LargeText>
      </Container>

      <BrandNameWrapper>
        <DisplayText>bust.studio</DisplayText>
      </BrandNameWrapper>
    </HeroWrapper>
  )
}

export default Hero
