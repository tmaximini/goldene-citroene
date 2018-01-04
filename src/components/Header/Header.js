import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import NavBar from '../NavBar/NavBar'
import logoText from './logo.png'
import zitrone from './zitrone.png'

const HeaderWrapper = styled.header`
  height: 100px;
  width: 100%;
  background-color: #000000;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  @media screen and (min-width: 375px) {
    height: 140px;
  }
`

const Inner = styled.div`
  display: flex;
  height: 90px;
  align-items: center;
  justify-content: space-around;
  max-width: 62em;
  margin: 0 auto;
  @media screen and (min-width: 375px) {
    height: 110px;
  }
`

const Logo = styled(Link)`
  color: #050505;
  text-transform: uppercase;
  text-decoration: none;
`

const NavLink = styled(Link)`
  color: #ebf74e;
  margin: 0 20px;
  font-size: 14px;
  text-decoration: none;
  @media screen and (min-width: 375px) {
    font-size: 16px;
  }
`

const LogoImg = styled.img`
  height: 80px;
  width: auto;
  margin: 0;
  max-width: auto;
  position: fixed;
  top: 0;
  left: 0;
  @media screen and (min-width: 375px) {
    height: 120px;
  }
`

const Zitrone = styled.img`
  height: 40px;
  animation: spin 4s linear infinite;
  @media screen and (min-width: 375px) {
    height: 80px;
  }
  @keyframes spin {
    100% {
      transform: rotate(360deg) scale(1.5);
    }
  }
`

NavLink.defaultProps = {
  activeStyle: {
    borderBottom: '2px solid #ebf74e'
  }
}

const Header = () => (
  <HeaderWrapper>
    <Inner>
      <Logo to="/">
        <LogoImg src={logoText} alt="logo" />
      </Logo>
      <Zitrone src={zitrone} />
    </Inner>
    <NavBar />
  </HeaderWrapper>
)

export default Header
