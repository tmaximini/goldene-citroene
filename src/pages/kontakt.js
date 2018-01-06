import React from 'react'
import Link from 'gatsby-link'
import Section from '../components/Section/Section'
import ContentArea from '../components/ContentArea/ContentArea'
import truck from '../images/truck1.jpg'

const KontaktPage = () => (
  <Section>
    <ContentArea
      headline="Kontakt"
      image={truck}
      content={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor expedita provident possimus debitis harum aperiam error nisi repudiandae ipsam est tempore iste vero velit distinctio, labore neque eveniet blanditiis quia?
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor expedita provident possimus debitis harum aperiam error nisi repudiandae ipsam est tempore iste vero velit distinctio, labore neque eveniet blanditiis quia?
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor expedita provident possimus debitis harum aperiam error nisi repudiandae ipsam est tempore iste vero velit distinctio, labore neque eveniet blanditiis quia?`}
    />
  </Section>
)

export default KontaktPage
