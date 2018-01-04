import React from 'react'
import Link from 'gatsby-link'
import Section from '../components/Section/Section'

const IndexPage = () => (
  <Section>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Section>
)

export default IndexPage
