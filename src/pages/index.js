import React from 'react'
import Link from 'gatsby-link'
import Section from '../components/Section/Section'
import ContentArea from '../components/ContentArea/ContentArea'

const IndexPage = ({ data }) => {
  const { edges: content } = data.allMarkdownRemark
  return (
    <Section>
      {content.map((item, index) => (
        <ContentArea
          key={item.node.id}
          headline={item.node.frontmatter.title}
          image={item.node.frontmatter.img}
          content={item.node.html}
          reverse={(index + 1) % 2 === 0}
        />
      ))}
    </Section>
  )
}

export default IndexPage

export const indexQuery = graphql`
  query indexContent {
    allMarkdownRemark(filter: { frontmatter: { page: { eq: "home" } } }) {
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
