import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Listing from "../components/listing"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allContentfulArticlePost.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Listing posts={posts} />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulArticlePost (
      filter: { node_locale: { eq: "pl-PL" } }
      sort: { fields: [date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          title
          subtitle
          date (formatString: "DD MMMM, YYYY", locale: "pl-PL" )
          author
          slug
          postType
        }
      }
    }
  }
`
