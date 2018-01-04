import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  background: #000000;
  color: #ebf74e;
  border-top: 1px solid #ebf74e;
  padding: 40px;
`

const CopyRight = styled.h3`
  color: #ebf74e;
  text-align: center;
  font-weight: 400;
  font-size: 0.9em;
  text-rendering: optimizeLegibility;
  line-height: 1.65rem;
  margin: 0;
`

const Footer = () => (
  <FooterWrapper>
    <CopyRight>&copy; {new Date().getYear() + 1900} Zur goldenen Citröene</CopyRight>
  </FooterWrapper>
)

export default Footer
