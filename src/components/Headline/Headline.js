import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const H2 = styled.h2`
  font-size: 2em;
  padding: 10px 0;
  text-align: left;
  font-family: 'Amatic SC', cursive;
  font-weight: bold;
`

const Headline = ({ text }) => <H2>{text}</H2>

export default Headline
