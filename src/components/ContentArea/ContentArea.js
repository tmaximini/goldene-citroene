import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Image from 'gatsby-image'
import Headline from '../Headline/Headline'

const ContentAreaWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  z-index: 2;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: ${props => (props.rev ? 'row' : 'row-reverse')};
  overflow: hidden;
  flex-grow: 1;
`

const Image50 = styled.div`
  flex: 1 0 auto;
  display: none;
  padding: 20px;
  @media screen and (min-width: 736px) {
    display: block;
  }
`

const Text = styled.div`
  width: 100%;
  text-align: left;
  padding: 20px;
  @media screen and (min-width: 736px) {
    width: 60%;
  }
`

const BGImage = styled.div`
  opacity: 0.3;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: -1;
  @media screen and (min-width: 736px) {
    display: none;
  }
`

const ContentArea = ({ image, reverse = false, content = '', headline }) => (
  <ContentAreaWrapper rev={reverse}>
    <BGImage src={image.childImageSharp.sizes.src} />
    <Image50>
      <Image sizes={image.childImageSharp.sizes} />
    </Image50>
    <Text>
      {headline && <Headline text={headline} />}
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Text>
  </ContentAreaWrapper>
)

export default ContentArea
