import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Headline from '../Headline/Headline'

const ContentAreaWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: ${props => (props.rev ? 'row' : 'row-reverse')};

  &::after {
    content: '';
    background: ${props => `url(${props.src})`} center center no-repeat;
    background-size: cover;
    opacity: 0.4;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
`

const Image50 = styled.div`
  flex: 1 0 auto;
`

const Text = styled.div`
  width: 70%;
  padding: 20px;
  text-align: left;
`

const ContentArea = ({ image, reverse = false, content = '', headline }) => (
  <ContentAreaWrapper rev={reverse} src={image}>
    <Image50 />
    <Text>
      {headline && <Headline text={headline} />}
      <p>
        {content ||
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor expedita provident possimus debitis harum aperiam error nisi repudiandae ipsam est tempore iste vero velit distinctio, labore neque eveniet blanditiis quia?'}
      </p>
    </Text>
  </ContentAreaWrapper>
)

export default ContentArea
