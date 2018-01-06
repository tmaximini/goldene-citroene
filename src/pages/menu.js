import React from 'react'
import Link from 'gatsby-link'
import Section from '../components/Section/Section'
import ContentArea from '../components/ContentArea/ContentArea'
import truck4 from '../images/truck4.jpg'
import truck3 from '../images/truck3.jpg'

const MenuPage = () => (
  <Section>
    <ContentArea headline="Unser Menü" image={truck4} />
    <ContentArea headline="Unsere Specials" image={truck3} reverse />
  </Section>
)

export default MenuPage
