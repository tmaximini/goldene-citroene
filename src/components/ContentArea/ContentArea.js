import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const ContentAreaWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: ${props => (props.rev ? 'row-reverse' : 'row')}

  &::after {
    content: '';
    background: ${props => `url(${props.src})`} center center no-repeat;
    background-size: cover;
    opacity: 0.5;
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

const ContentArea = ({ image, reverse = false }) => (
  <ContentAreaWrapper rev={reverse} src={image}>
    <Image50 />
    <Text>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum omnis, dolores praesentium nisi
        maiores commodi iure quia culpa at, eveniet fugit asperiores dignissimos laborum. Saepe
        iusto reprehenderit labore aut veritatis.
      </p>
    </Text>
  </ContentAreaWrapper>
)

export default ContentArea
