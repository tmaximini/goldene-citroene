import React from 'react'
import Link from 'gatsby-link'
import Section from '../components/Section/Section'
import ContentArea from '../components/ContentArea/ContentArea'
import soup from '../images/soup.png'
import pancakes from '../images/pancakes.png'

const IndexPage = () => (
  <Section>
    <ContentArea headline="Willkommen" image={soup} reverse />
    <ContentArea headline="Der Truck" image={pancakes} />
  </Section>
)

export default IndexPage
