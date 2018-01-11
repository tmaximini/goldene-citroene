import React from 'react'
import Link from 'gatsby-link'
import Section from '../components/Section/Section'
import ContentArea from '../components/ContentArea/ContentArea'

const CateringPage = ({ data }) => {
  const { edges: content } = data.allMarkdownRemark
  console.info({ content })
  return (
    <Section>
      {content.map(item => (
        <ContentArea
          headline={item.node.frontmatter.title}
          image={item.node.frontmatter.img}
          content={item.node.html}
        />
      ))}
    </Section>
  )
}

export default CateringPage

export const cateringQuery = graphql`
  query cateringContent {
    allMarkdownRemark(filter: { frontmatter: { page: { eq: "catering" } } }) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            img {
              childImageSharp {
                sizes(maxWidth: 1200) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`
