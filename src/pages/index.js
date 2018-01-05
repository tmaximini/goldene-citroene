import React from 'react'
import Link from 'gatsby-link'
import Section from '../components/Section/Section'
import ContentArea from '../components/ContentArea/ContentArea'
import soup from '../images/soup.png'
import soup2 from '../images/soup2.png'
import pancakes from '../images/pancakes.png'

const IndexPage = () => (
  <Section>
    <ContentArea image={soup} />
    <ContentArea image={pancakes} reverse />
    <ContentArea image={soup2} />
  </Section>
)

export default IndexPage
