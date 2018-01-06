import React from 'react'
import Link from 'gatsby-link'
import Section from '../components/Section/Section'
import ContentArea from '../components/ContentArea/ContentArea'
import truck2 from '../images/truck3.jpg'
import pancakes from '../images/pancakes.png'

const WannPage = () => (
  <Section>
    <ContentArea headline="Nächste Termin" image={truck2} reverse />
    <ContentArea headline="Regelmässige Termine" image={pancakes} />
  </Section>
)

export default WannPage
