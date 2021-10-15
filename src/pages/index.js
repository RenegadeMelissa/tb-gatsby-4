import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Viewport from '../components/viewport'

export default function Home({ data }) {
  return (
    <Viewport>
      <div>
        <main></main>
      </div>
    </Viewport>
  )
}

export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          description
        }
        slug
      }
    }
  }
`
