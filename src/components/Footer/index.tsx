import Heading from 'components/Heading'
import Logo from 'components/Logo'
import * as S from './styles'

import Link from 'next/link'

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />
    <S.Content>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Contact
        </Heading>
        <a href="mailto:sac@wongames.com">sac@wongames.com</a>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Follow us
        </Heading>
        <nav aria-labelledby="social media">
          <Link href="#">
            <a target="_blank" rel="noopenner, noreferrer">
              Instagram
            </a>
          </Link>
          <Link href="#">
            <a target="_blank" rel="noopenner, noreferrer">
              Twitter
            </a>
          </Link>

          <Link href="#">
            <a target="_blank" rel="noopenner, noreferrer">
              Youtube
            </a>
          </Link>

          <Link href="#">
            <a target="_blank" rel="noopenner, noreferrer">
              Facebook
            </a>
          </Link>
        </nav>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Links
        </Heading>
        <nav aria-labelledby="footer resources">
          <Link href="/">
            <a>Loja</a>
          </Link>

          <Link href="/game">
            <a>Store</a>
          </Link>

          <Link href="/search">
            <a>Search</a>
          </Link>
        </nav>
      </S.Column>

      <S.Column aria-labelledby="footer-contact">
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Location
        </Heading>
        <span>Lorem ipsum dolor sit</span>
        <span>Lorem Ipsum</span>
        <span>Lorem, ipsum dolor.</span>
      </S.Column>
    </S.Content>
    <S.CopyRight>Won Games 2022 © All rights reserved.</S.CopyRight>
  </S.Wrapper>
)

export default Footer
