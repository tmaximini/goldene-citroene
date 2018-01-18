import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Section from '../components/Section/Section'
import ContentArea from '../components/ContentArea/ContentArea'

const TextSection = styled.div`
  padding: 20px;
`

const ImpressumPage = ({ data }) => {
  const { edges: content } = data.allMarkdownRemark
  return (
    <Section>
      <TextSection dangerouslySetInnerHTML={{ __html: content[0].node.html }} />
    </Section>
  )
}

export default ImpressumPage

export const impressumQuery = graphql`
  query impressumContent {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "impressum" } } }) {
      edges {
        node {
          id
          html
        }
      }
    }
  }
`
